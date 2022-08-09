//@ts-nocheck

const sel = figma.currentPage.selection[0];

let result = [];
function lookForProperties(node) {
  if (node.componentProperties) {
    let props = node.componentProperties;
    const propArr = Object.entries(props);
    result = result.concat(propArr);
  }
  if (node.children && node.children.length > 0) {
    node.children.forEach((element) => {
      lookForProperties(element);
    });
    return result;
  }
  return result;
}

const allProps = lookForProperties(sel);
const filteredArray = allProps.filter((node) => node[1].type === "TEXT");
console.log("what I need is ", filteredArray);
figma.closePlugin();
