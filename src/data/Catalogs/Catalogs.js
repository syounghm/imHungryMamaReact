const getCatalogs = (name) => {
  return { name };
};
export const Catalogs = {
  1: getCatalogs("Rice & Noodles"),
  2: getCatalogs("Sauces"),
  3: getCatalogs("Seasonings, Spices, & Broth Mixes"),
  4: getCatalogs("Tapioca Products"),
  5: getCatalogs("Teas & Coffees"),
  6: getCatalogs("Candies"),
};

export default Catalogs;
