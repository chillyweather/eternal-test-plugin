// @ts-nocheck
//* test file for all the bullshit i think about

const loadFonts = async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
};

const textSizes = {
  xs: 12,
  s: 14,
  m: 18,
  l: 26,
  xl: 40,
};

loadFonts().then(() => {});

figma.closePlugin();
