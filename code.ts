//@ts-nocheck

const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
};

const releaseNotes = figma.createComponent();
const title = figma.createComponent();
const row = figma.createComponent();
const cell = figma.createComponent();

const titleText = figma.createText();
const noteText = figma.createText();



loadFonts()
  .then(() => {})
  .finally(() => figma.closePlugin());
