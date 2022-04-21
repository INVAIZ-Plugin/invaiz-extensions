!(function () {
  var http = require("http");
  var os = require("os");
  var fs = require("fs");
  var portNumber = 0;
  var localHost = "127.0.0.1";
  var functionName = "";
  var appName = "";
  var logFile = log("log.txt");
  var csInterface = new CSInterface();

  var server = http.createServer().on("listening", () => {
    portNumber = server.address().port.toString();
    console.log("INFO", "Server created listening PORT: " + portNumber + ", IP: " + localHost);
    var txtFile = createPortFile("cep_port.dll");
    fs.writeFile(txtFile, portNumber, e => {
      //port 파일 쓰는부분
      if (e) {
        alert(e);
      }
    });
    fs.writeFile(logFile, "server onLoad\n", e => {
      //log 파일 쓰는부분
      if (e) {
        alert(e);
      }
    });
  });

  function Request(request, response) {
    var userdata = null;
    request.setEncoding("utf-8");

    request.on("error", err => {
      //요청에 에러가 있을 시.
      response.write(err);
      response.end();
    }),
      request.on("data", data => {
        //요청에 데이터가 있을 시.
        userdata = JSON.parse(data);
      }),
      request.on("end", () => {
        //요청에 데이터를 모두 받았을 시.
        response.on("error", err => {
          // 응답에 에러가 있으면
          console.error(err);
        });
        switch (userdata.messageType) {
          case "adjustment":
            functionName = `${userdata.actionType}(${userdata.payload})`;
            break;
          case "adjustmentLayer":
            functionName = `${userdata.actionType}("${userdata.typeKey}",${userdata.payload})`;
            break;
          case "command":
            functionName = `${userdata.actionType}("${userdata.typeKey}")`;
            break;
          case "modifyProperty":
            functionName = `${userdata.actionType}(${JSON.stringify(userdata)})`;
            break;
        }
        csInterface.evalScript(functionName, status => {
          response.statusCode = 200; // 성공 상태 코드
          response.setHeader("Content-Type", "text/plain"); // header 설정
          response.write(status); // body에 정보 탑재
          response.end(); // 정보 탑재 후 브라우저로 전송
          fs.appendFile(logFile, status + "\n", e => {
            //port 파일 쓰는부분
            if (e) {
              alert(e);
            }
          });
        });
      });
  }

  function openDoc() {
    csInterface.evalScript("test()");
  }
  function getPortName() {
    var folderName;
    var e = csInterface.getHostEnvironment();
    switch (e.appId) {
      case "PHXS":
        folderName = "Photoshop";
        break;
      case "PHSP":
        folderName = "Photoshop";
        break;
      case "ILST":
        folderName = "Illustrator";
        break;
      case "AEFT":
        folderName = "AfterEffect";
        break;
      case "PPRO":
        folderName = "PremierePro";
        break;
      case "IDSN":
        folderName = "Indesign";
        break;
    }
    return folderName;
  }

  window.onload = function () {
    let extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + `/jsx/`;
    appName = getPortName();
    server.on("request", Request);
    extensionRoot += appName;
    csInterface.evalScript(`evalFiles("${extensionRoot}")`);
    server.listen(0, localHost);
  };

  function createPortFile(fileName) {
    var temp = "Windows_NT" === os.type();
    var r = temp ? "\\" : "/";
    var a = temp ? "\\AppData\\Local\\Invaiz Studio" : "/.local/share/Invaiz Studio";
    return (
      (a = os.homedir() + a),
      fs.existsSync(a, { recursive: true }) || fs.mkdirSync(a),
      (a += r + "Port"),
      fs.existsSync(a) || fs.mkdirSync(a),
      (a += r + appName),
      fs.existsSync(a) || fs.mkdirSync(a),
      a + r + fileName
    );
  }
  function log(fileName) {
    var temp = "Windows_NT" === os.type();
    var r = temp ? "\\" : "/";
    var a = temp ? "\\AppData\\Local\\Invaiz Studio" : "/.local/share/Invaiz Studio";
    return (
      (a = os.homedir() + a),
      fs.existsSync(a, { recursive: true }) || fs.mkdirSync(a),
      (a += r + "Log"),
      fs.existsSync(a) || fs.mkdirSync(a),
      (a += r + appName),
      fs.existsSync(a) || fs.mkdirSync(a),
      a + r + fileName
    );
  }
})();
