// returns catalog name and symbols
const generateSubCatalog = (catalog, symbol = []) => {
  const newSubCatalog = {};
  newSubCatalog[catalog] = [...symbol];
  return newSubCatalog;
};
