import Catalogs from "../Catalogs/Catalogs";

export const Subcatalogs = {
  1: getSubcatalogs("Rice", Catalogs[1]),
  2: getSubcatalogs("Noodles", Catalogs[1]),
  3: getSubcatalogs("Rice Paper", Catalogs[1]),
  4: getSubcatalogs("Instant Noodles", Catalogs[1]),
  5: getSubcatalogs("Sauces", Catalogs[2]),
  6: getSubcatalogs("Seasonings", Catalogs[3]),
  7: getSubcatalogs("Spices", Catalogs[3]),
  8: getSubcatalogs("Broth Mixes", Catalogs[3]),
  9: getSubcatalogs("Tapioca Products", Catalogs[4]),
  10: getSubcatalogs("Teas", Catalogs[5]),
  11: getSubcatalogs("Coffees", Catalogs[5]),
  12: getSubcatalogs("Candies", Catalogs[6]),
};

const getSubcatalogs = (name, catalog) => {
  return { name, catalog };
};

export default Subcatalogs;
