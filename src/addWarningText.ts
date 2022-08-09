// @ts-nocheck
import { dsWhite } from "./colorStyles.ts";

function addWarningText(text) {
  const warning = figma.createText();
  warning.name = "warning";
  warning.fillStyleId = dsWhite.id;
  warning.characters = `${text}`;
  warning.fontSize = 100;
  warning.fontName = {
    family: "Inter",
    style: "Bold",
  };
  warning.textAutoResize = "HEIGHT";
  warning.resize(2600, 200);
  warning.x = 200;
  warning.y = 2600;
  return warning;
}

export default addWarningText;
