import Catalogs from "../Catalogs/Catalogs";

const getSubcatalogs = (name, catalog) => {
  return { name, catalog };
};

export const Subcatalogs = [
  getSubcatalogs("Rice", Catalogs[1]),
  getSubcatalogs("Noodles", Catalogs[1]),
  getSubcatalogs("Rice Paper", Catalogs[1]),
  getSubcatalogs("Instant Noodles", Catalogs[1]),
  getSubcatalogs("Sauces", Catalogs[2]),
  getSubcatalogs("Seasonings", Catalogs[3]),
  getSubcatalogs("Spices", Catalogs[3]),
  getSubcatalogs("Broth Mixes", Catalogs[3]),
  getSubcatalogs("Tapioca Products", Catalogs[4]),
  getSubcatalogs("Teas", Catalogs[5]),
  getSubcatalogs("Coffees", Catalogs[5]),
  getSubcatalogs("Candies", Catalogs[6]),
];

export default Subcatalogs;
