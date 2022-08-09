// @ts-nocheck
//* test file for all the bullshit i think about

import { dsWhite } from "./colorStyles";
import { dsBlack, dsPrimaryColor } from "./colorStyles.ts";

const textSizes = {
  xs: 12,
  s: 14,
  m: 18,
  l: 26,
  xl: 40,
};

const fonts = ["regular", "bold"];
const colors = ["dark", "primary"];

function buildStylesObjects() {
  const styleObjects = [];
  for (const key in textSizes) {
    let styleObject = {};
    styleObject.sizeName = `${key}`;
    styleObject.size = textSizes[key];
    for (let font of fonts) {
      styleObject.font = font;
      for (let color of colors) {
        styleObject.color = color;
        const styleToPush = {
          ...styleObject,
        };
        styleObjects.push(styleToPush);
      }
    }
  }
  return styleObjects;
}

const textStyleObjects = buildStylesObjects();

function buildTitleStyleComponent() {
  textStyleObjects.forEach((obj) => {
    const textStyleComp = figma.createComponent();
    const textStyleCompText = figma.createText();
    textStyleComp.appendChild(textStyleCompText);
    textStyleCompText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

    textStyleCompText.fontSize = obj.size;
    textStyleCompText.characters = `Title ${obj.sizeName}`;
    obj.font === "bold"
      ? (textStyleCompText.fontName = {
          family: "Inter",
          style: "Bold",
        })
      : (textStyleCompText.fontName = {
          family: "Inter",
          style: "Regular",
        });
    obj.color === "primary"
      ? (textStyleCompText.fillStyleId = dsPrimaryColor.id)
      : (textStyleCompText.fillStyleId = dsBlack.id);
    textStyleComp.name = `size=${obj.sizeName},font=${obj.font},color=${obj.color}`;
    textStyleComp.layoutPositioning = "AUTO";
    textStyleComp.layoutMode = "HORIZONTAL";
    textStyleComp.primaryAxisSizingMode = "AUTO";
    textStyleComp.counterAxisSizingMode = "AUTO";
  });
  const titles = figma.currentPage.findAll((node) =>
    node.name.includes("size=")
  );
  const titleComponentSet = figma.combineAsVariants(titles, figma.currentPage);
  titleComponentSet.name = ".DS-title";
  titleComponentSet.x = 200;
  titleComponentSet.y = 1320;
  titleComponentSet.layoutPositioning = "AUTO";
  titleComponentSet.layoutMode = "VERTICAL";
  titleComponentSet.counterAxisAlignItems = "MIN";
  titleComponentSet.counterAxisSizingMode='AUTO'
  titleComponentSet.fillStyleId = dsWhite.id;
  titleComponentSet.paddingBottom = 20;
  titleComponentSet.paddingTop = 20;
  titleComponentSet.paddingLeft = 20;
  titleComponentSet.paddingRight = 20;
  titleComponentSet.cornerRadius = 28;
  return titleComponentSet;
}

export default buildTitleStyleComponent;
