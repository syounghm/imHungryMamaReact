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
  getProduct(
    "Acecook Bean Vermicelli Spare Ribs Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACBeanVermicelliRibs",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Bean Vermicelli Tom Yum Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACBeanVermicelliTomYum",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Sate Onion Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHaoHaoOnion",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Hot-Sour Shrimp Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHaoHaoShrimp",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Shrimp & Onion Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHaoHaoShrimpOnion",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Sweet & Sour Shrimp Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHaoHaoSweetSour",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Vegetarian Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHaoHaoVeg",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Beef Ball Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHuTieuBeef",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Beef Ball Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHuTieuBeef",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Phnom Penh Style",
    Brands[1],
    Subcatalogs[4],
    "ACHuTieuPP",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Spare Ribs Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACHuTieuRibs",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Mi Lau Thai Chicken Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACMiLauThaiChicken",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Mi Lau Thai Seafood Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACMiLauThaiSeafood",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Mi Lau Thai Shrimp Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACMiLauThaiShrimp",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Sate Onion Flavor Cup",
    Brands[1],
    Subcatalogs[4],
    "ACOnionCup",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Pho Beef Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACPhoBeef",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Pho Chicken Flavor",
    Brands[1],
    Subcatalogs[4],
    "ACPhoChicken",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hot-Sour Shrimp Flavor Cup",
    Brands[1],
    Subcatalogs[4],
    "ACShrimpCup",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Vegetarian Flavor Cup",
    Brands[1],
    Subcatalogs[4],
    "ACVegCup",
    null,
    false,
    false
  ),
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
