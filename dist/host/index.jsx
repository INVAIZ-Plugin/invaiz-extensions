function evalFiles(jsxFolderPath) {
  var folder = new Folder(jsxFolderPath);
  if (folder.exists) {
    var jsxFiles = folder.getFiles("*.jsxbin");
    for (var i = 0; i < jsxFiles.length; i++) {
      var jsxFile = jsxFiles[i];
      try {
        $.evalFile(jsxFile);
      } catch (e) {
        return "Exception " + e;
      }
    }
  }
}

//Photoshop

function modifyBrushSize(payload) {
  return _brush.modifyBrush("diameter", payload);
}
function modifyBrushMode(payload) {
  return _brush.changeBrushMode(payload);
}
function modifyBrushOpacity(payload) {
  return _brush.modifyBrush("opacity", payload);
}
function modifyBrushHardness(payload) {
  return _brush.modifyBrush("hardness", payload);
}
function modifyBrushAngle(payload) {
  return _brush.modifyBrush("angle", payload);
}
function modifyBrushFlow(payload) {
  return _brush.modifyBrush("flow", payload);
}
function modifyBrushSmooth(payload) {
  return _brush.modifyBrush("smooth", payload);
}
function modifyBrushPressure(payload) {
  return _brush.modifyBrush("pressure", payload);
}
function modifyBrushRoundness(payload) {
  return _brush.modifyBrush("roundness", payload);
}
function modifyBrushSpacing(payload) {
  return _brush.modifyBrush("spacing", payload);
}
function forecolorH(payload) {
  return _color.colorAdjustment(payload, true, "h");
}
function forecolorS(payload) {
  return _color.colorAdjustment(payload, true, "s");
}
function forecolorB(payload) {
  return _color.colorAdjustment(payload, true, "b");
}
function backcolorH(payload) {
  return _color.colorAdjustment(payload, false, "h");
}
function backcolorS(payload) {
  return _color.colorAdjustment(payload, false, "s");
}
function backcolorB(payload) {
  return _color.colorAdjustment(payload, false, "b");
}
function setTool(payload) {
  return _general.setTool(payload);
}
function exportAsFile() {
  return _general.exportAsFile();
}
function selectTool(payload) {
  return _general.selectTool(payload);
}
function exportAsLayer() {
  return _general.exportAsLayer();
}
function zoomInOut(payload) {
  return _zoom.zoomInOut(payload * 2);
}
function createLayer() {
  return _layers.createLayer();
}
function groupLayers() {
  return _layers.groupLayers();
}
function moveLayer(payload) {
  return _layers.moveLayer(payload);
}
function copyMerge() {
  return _layers.copyMerge();
}
function selectLayer(payload) {
  return _layers.selectLayer(payload);
}
function setLayerOpacity(payload) {
  return _layers.setLayerOpacity(payload);
}
function allLayerHide() {
  return _layers.isolateLayer();
}
function copyLayer() {
  return _layers.duplicate();
}
function mergeDown() {
  return _layers.mergeDown();
}
function copyMergeVisible() {
  return _layers.copyMergeVisible();
}
function layerVisibleToggle() {
  return _layers.layerVisibleToggle();
}
function clippingMask() {
  return _layers.clippingMaskToggle();
}
function createLayerMask(payload) {
  return _layers.createLayerMask(payload);
}
function setLayerFill(payload) {
  return _layers.setLayerFillTest(payload);
}
function setFill(payload) {
  return _layers.setFill(payload);
}
function changeBlendMode(payload) {
  return _layers.changeBlendMode(payload);
}
function rotateLayer() {
  return _layers.layerRotate();
}
function deleteLayer() {
  return _layers.deleteLayer();
}
function smartObjectToggle() {
  return _layers.smartObjectToggle();
}
function layerAdustmentAngle(payload) {
  return _layers.layerAdustmentAngle(payload);
}
function applyStroke() {
  return _general.applyStroke();
}
function activateFreeTransform() {
  return _general.activateFreeTransform();
}
function saveFile() {
  return _general.saveFile();
}
function adjustmentLayerAdjust(payload, diff) {
  return _adjustmentLayers.adjust(payload, diff);
}
function createAdjustmentLayer(payload) {
  return _adjustmentLayers.create(payload);
}
function undo() {
  return _general.setHistoryState(1);
}
function redo() {
  return _general.setHistoryState(-1);
}
function undoRedo(payload) {
  if (payload > 0) return _general.setHistoryState(-1);
  else return _general.setHistoryState(1);
}
function modifySmartFilter(payload, diff) {
  return _filters.modifyFilter(diff, payload);
}
function smartfilterCreate(payload) {
  return _filters.create(payload);
}

//Illustrator

function Ai_ZoomInOut(payload) {
  return AiZoom.zoomInOut(payload);
}
function Ai_CreateLayer() {
  return AiLayer.createLayer();
}
function Ai_DeleteLayer() {
  return AiLayer.deleteLayer();
}
function Ai_DeleteEmptyLayer() {
  return AiLayer.deleteEmptyLayer();
}
function Ai_ToggleLayer() {
  return AiLayer.toggleLayer();
}
function Ai_SetLayerOpacity(payload) {
  return AiLayer.setLayerOpacity(payload);
}
function Ai_SelectLayer(payload) {
  if (payload > 0) return AiLayer.selectPrevayer();
  else return AiLayer.selectNextLayer();
}
function Ai_MoverLayer(payload) {
  return AiLayer.moveLayer(payload);
}
function Ai_BackToLayer() {
  return AiLayer.backToLayer();
}
function Ai_FrontToLayer() {
  return AiLayer.frontToLayer();
}
function Ai_MovePathItem(payload) {
  return AiLayer.movePathItem(payload);
}
function Ai_SelectPathItem(payload) {
  return AiLayer.selectPathItem(payload);
}
function Ai_ModifyTextSize(payload) {
  return AiText.modifyTextSize(payload);
}
function Ai_ModifyTextFontChange(payload) {
  return AiText.modifyTextFont(payload);
}
function Ai_ModifyTextSpacing(payload) {
  return AiText.modifyTextSpacing(payload);
}
function Ai_ModifyTextLeading(payload) {
  return AiText.modifyTextLeading(payload);
}
function Ai_ModifyTextAngle(payload) {
  return AiText.modifyTextAngle(payload);
}
function Ai_ModifyStroke(payload) {
  return AiObject.modifyStorkeSize(payload);
}
function Ai_ModifyVerticalScale(payload) {
  return AiObject.modifyVerticalScale(payload);
}
function Ai_ModifyHorizontalScale(payload) {
  return AiObject.modifyHorizontalScale(payload);
}
function Ai_ModifyResize(payload) {
  return AiObject.modifyResize(payload);
}
function Ai_ModifyStrokeOpacity(payload) {
  return AiObject.modifyStrokeOpacity(payload);
}
function Ai_RotateObject(payload) {
  return AiObject.selectAreaRotate(payload);
}
function Ai_LockObject() {
  return AiObject.lockObject();
}
function Ai_ExpandStyleObject() {
  return AiObject.expandStyleObject();
}
function Ai_ExpandObject() {
  return AiObject.expandObject();
}
function Ai_ExpandStyleObject() {
  return AiObject.expandStyleObject();
}
function Ai_GroupObject() {
  return AiObject.groupObject();
}
function Ai_UnGroupObject() {
  return AiObject.ungroupObjet();
}
function Ai_FilpHorizontal() {
  return AiObject.filpHorizontal();
}
function Ai_FilpVertical() {
  return AiObject.filpVertical();
}
function Ai_DuplicateFilpHorizontal() {
  return AiObject.duplicateHorizontal();
}
function Ai_DuplicateFilpVertical() {
  return AiObject.duplicateVertical();
}
function Ai_History(payload) {
  if (payload > 0) return AiGeneral.redo();
  else return AiGeneral.undo();
}
function Ai_Undo() {
  return AiGeneral.undo();
}
function Ai_Redo() {
  return AiGeneral.redo();
}
function Ai_CreateArtboard() {
  return AiArtboard.createArtBoard();
}
function Ai_SelectArtboard(payload) {
  return AiArtboard.selectedArtBoard(payload);
}
function Ai_DeleteArtboard() {
  return AiArtboard.deleteArtBoard();
}
function Ai_Save() {
  return AiGeneral.saveFile();
}
function Ai_Saveas() {
  return AiGeneral.saveAsfile();
}
function Ai_Export() {
  return AiGeneral.exportAs();
}
function Ai_CreateMask() {
  return AiGeneral.createMask();
}
function Ai_NewWindow() {
  return AiGeneral.newWindow();
}

// AFTER EFFECT
function AF_Settool(payload) {
  return AeGeneral.setTool(payload);
}
function AF_DuplicateLayer() {
  return AeMoveLayers.duplicateLayer();
}
function AF_DelteLayer() {
  return AeMoveLayers.deleteLayer();
}
function AF_ModifyLayerScale(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Scale", payload);
}
function AF_ModifyLayerScaleX(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Scale X", payload);
}
function AF_ModifyLayerScaleY(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Scale Y", payload);
}
function AF_ModifyLayerScaleZ(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Scale Z", payload);
}
function AF_ModifyLayerAnchorPointX(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Anchor Point X", payload);
}
function AF_ModifyLayerAnchorPointY(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Anchor Point Y", payload);
}
function AF_ModifyLayerAnchorPointZ(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Anchor Point Z", payload);
}
function AF_ModifyLayerRotateX(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Rotate X", payload);
}
function AF_ModifyLayerRotateY(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Rotate Y", payload);
}
function AF_ModifyLayerRotateZ(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Rotate Z", payload);
}
function AF_ModifyLayerPositionX(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Position X", payload);
}
function AF_ModifyLayerPositionY(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Position Y", payload);
}
function AF_ModifyLayerPositionZ(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Position Z", payload);
}
function AF_ModifyLayerOrientationX(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Orientation X", payload);
}
function AF_ModifyLayerOrientationY(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Orientation Y", payload);
}
function AF_ModifyLayerOrientationZ(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Orientation Z", payload);
}
function AF_ModifyLayerOpacity(payload) {
  return AeModifyTransform.adjustTransformParameter("ADBE Opacity", payload);
}
function AF_ModifyCameraOption(payload, diff) {
  return AeModifyCamera.modifyCameraOpction(payload, diff);
}
function AF_ModifyLightOption(payload, diff) {
  return AeModifyLight.modifyLightOpction(payload, diff);
}
function AF_ToggleLayer(payload) {
  return AeToggle.layerSwitch(payload);
}
function AF_SelectedLayer(payload) {
  return AeSelctedLayer.selectLayer(payload);
}
function AF_MoveLayer(payload) {
  return AeMoveLayer.startPoint(payload);
}
function AF_AddEffects(payload) {
  return AeAddEffect.addEffectToSelectedLayers(payload);
}
function AF_ModifyLumetriColors(payload, diff) {
  return AeLumetriColor.modifyLumetriColor(payload, diff);
}

// Indesign

function Id_SetTool(payload) {
  return IdGeneral.setTool(payload);
}
function Id_CreateLayer() {
  return IdLayer.createLayer();
}
function Id_DeleteLayer() {
  return IdLayer.deleteLayer();
}
function Id_LockLayer() {
  return IdLayer.lockLayer();
}
function Id_DuplicateLayer() {
  return IdLayer.duplicateLayer();
}
function Id_VisibleLayer() {
  return IdLayer.visibleLayer();
}
function Id_SelectLayer(payload) {
  return IdLayer.selectLayer(payload);
}
function Id_ModifyTextSize(payload) {
  return IdText.modifyTextSize(payload);
}
function Id_ModifyTextSpacing(payload) {
  return IdText.modifyTextSpacing(payload);
}
function Id_ModifyTextLeading(payload) {
  return IdText.modifyTextLeading(payload);
}
function Id_ZoomInOut(payload) {
  return IdSpread.zoomInOut(payload);
}
function Id_CreateSpread() {
  return IdSpread.createSpread();
}
function Id_ModifyStrokeSize(payload) {
  return IdObject.modifyStrokeSize(payload);
}
function Id_ModifyStrokeTint(payload) {
  return IdObject.modifyStrokeTint(payload);
}
function Id_ModifyStrokeHorizontalScale(payload) {
  return IdObject.modifyStrokeHorizontalScale(payload);
}
function Id_ModifyStrokeVerticalScale(payload) {
  return IdObject.modifyStrokeVerticalScale(payload);
}

// premiere pro
function Pr_ModifyLumetri(payload) {
  var t = payload.typeKey; // 인덱스 번호
  var diff = parseInt(payload.payload);
  var s = t.split("|");
  var category = s[0];
  var propsName = s[1];
  var props = {
    category: category,
    propsName: propsName,
  };
  return PrLumetri.modifyLumetri(props, parseInt(payload.payload));
}
function Pr_ModifyTimeline(payload) {
  return PrTimeline.modifyTimeline(payload);
}
function Pr_ModifyMotion(payload) {
  var t = payload.typeKey;
  var s = t.split(",");
  var props = s[0];
  var propsValueIndex = s[1];
  return PrMotion.modifyMotion(props, propsValueIndex, parseInt(payload.payload));
}
function Pr_ModifyOpacity(payload) {
  return PrOpacity.modifyOpacity(0, parseInt(payload.payload));
}
