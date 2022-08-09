// @ts-nocheck
function addAutoLayout() {
    const sel = figma.currentPage.selection;
    console.log(sel);
    sel.forEach((item) => {
      const chilldren = item.children;
      const content = figma.createFrame();
      content.fills = [];
      chilldren.forEach((node) => content.appendChild(node));
      item.appendChild(content);
      console.log(content.children);
      content.layoutPositioning = "AUTO";
      content.layoutMode = "HORIZONTAL";
      content.name = "content";
      content.counterAxisSizingMode = "AUTO";
      content.itemSpacing = 6;
      content.paddingBottom = 8;
      content.paddingTop = 8;
      content.paddingLeft = 8;
      content.paddingRight = 8;
      return item;
    });
  }
  
  addAutoLayout();
  figma.closePlugin();
  