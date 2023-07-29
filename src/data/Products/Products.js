import Subcatalogs from "../Subcatalogs/Subcatalogs";
import Brands from "../Brands/Brands";
import Catalogs from "../Catalogs/Catalogs";

export const Products = [
  getProduct(
    "Acecook Bean Vermicelli Chicken Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACBeanVermicelliChicken",
    null,
    false,
    false
  ),
  getProduct(),
];

const getProduct = (
  name,
  brand,
  subcatalog,
  symbol,
  price,
  amazonStatus,
  weeeStatus
) => {
  return {
    name,
    brand,
    subcatalog,
    symbol,
    price,
    amazonStatus,
    weeeStatus,
  };
};
