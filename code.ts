// @ts-nocheck
//* test file for all the bullshit i think about

function changeProjectStatus(status: string) {
  const page = figma.currentPage;
  const statusNodes = page.findAll((node) => node.name === ".DS-status");

  statusNodes.forEach((node) => {
    node.setProperties({ "Property 1": `${status}` });
  });

  const regex = /['🟣🟡⚪️🟢🔴🔵⚫️🟠']/u;
  page.name = page.name.replace(regex, "⚪️");
}

changeProjectStatus("tbd");
figma.closePlugin();
