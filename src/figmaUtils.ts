// @ts-nocheck

function addTextProperty(component, textNode) {
  component.appendChild(textNode);
  component.addComponentProperty("text", "TEXT", `${component.parent.name}`);
  const objName = Object.keys(component.componentPropertyDefinitions)[0];
  textNode.componentPropertyReferences = { characters: `${objName}` };
}

function buildPages(pages) {
  for (let page of pages) {
    let newPage = figma.createPage();
    newPage.name = page;
  }
}

export { addTextProperty, buildPages };
