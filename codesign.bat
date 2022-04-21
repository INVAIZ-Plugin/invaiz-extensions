ZXPSignCmd -selfSignedCert KR Busan INVAIZ Changjundev jun9121 INVAIZCert.p12
ZXPSignCmd -sign dist com.invaiz.extension.zxp INVAIZCert.p12 jun9121
rename com.invaiz.extension.zxp com.invaiz.extension.zip
mkdir com.invaiz.extension
tar -zxvf com.invaiz.extension.zip -C com.invaiz.extension