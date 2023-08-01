import Subcatalogs from "../Subcatalogs/Subcatalogs";
import Brands from "../Brands/Brands";

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

export const Products = [
  getProduct(
    "Acecook Bean Vermicelli Chicken Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACBeanVermicelliChicken",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Bean Vermicelli Spare Ribs Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACBeanVermicelliRibs",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Bean Vermicelli Tom Yum Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACBeanVermicelliTomYum",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Sate Onion Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHaoHaoOnion",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Hot-Sour Shrimp Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHaoHaoShrimp",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Shrimp & Onion Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHaoHaoShrimpOnion",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Sweet & Sour Shrimp Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHaoHaoSweetSour",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hao Hao Vegetarian Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHaoHaoVeg",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Beef Ball Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHuTieuBeef",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Beef Ball Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHuTieuBeef",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Phnom Penh Style",
    Brands[1],
    Subcatalogs[3],
    "ACHuTieuPP",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hu Tieu Spare Ribs Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACHuTieuRibs",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Mi Lau Thai Chicken Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACMiLauThaiChicken",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Mi Lau Thai Seafood Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACMiLauThaiSeafood",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Mi Lau Thai Shrimp Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACMiLauThaiShrimp",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Sate Onion Flavor Cup",
    Brands[1],
    Subcatalogs[3],
    "ACOnionCup",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Pho Beef Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACPhoBeef",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Pho Chicken Flavor",
    Brands[1],
    Subcatalogs[3],
    "ACPhoChicken",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Hot-Sour Shrimp Flavor Cup",
    Brands[1],
    Subcatalogs[3],
    "ACShrimpCup",
    null,
    false,
    false
  ),
  getProduct(
    "Acecook Vegetarian Flavor Cup",
    Brands[1],
    Subcatalogs[3],
    "ACVegCup",
    null,
    false,
    false
  ),
  getProduct(
    "New B.C.N. Coconut Candy",
    Brands[2],
    Subcatalogs[11],
    "BCNCoconutCandy",
    null,
    false,
    false
  ),
  getProduct(
    "New B.C.N. Ginger Coconut Candy",
    Brands[2],
    Subcatalogs[11],
    "BCNGingerCoconutCandy",
    null,
    false,
    false
  ),
  getProduct(
    "New B.C.N. Guava Coconut Candy",
    Brands[2],
    Subcatalogs[11],
    "BCNGuavaCoconutCandy",
    null,
    false,
    false
  ),
  getProduct(
    "New B.C.N. Mango Soft Candy",
    Brands[2],
    Subcatalogs[11],
    "BCNMangoSoftCandy",
    null,
    false,
    false
  ),
  getProduct(
    "New B.C.N. Red Cargo Rice",
    Brands[2],
    Subcatalogs[0],
    "BCNRedCargoRice",
    null,
    false,
    false
  ),
  getProduct(
    "New B.C.N. Thai Glutinous Rice",
    Brands[2],
    Subcatalogs[0],
    "BCNThaiGlutinousRice",
    null,
    false,
    false
  ),
  getProduct(
    "Chang Beef Flavor Broth Mix (L)",
    Brands[3],
    Subcatalogs[7],
    "ChangBeefBrothL",
    null,
    false,
    false
  ),
  getProduct(
    "Chang Beef Flavor Broth Mix (S)",
    Brands[3],
    Subcatalogs[7],
    "ChangBeefBrothS",
    null,
    false,
    false
  ),
  getProduct(
    "Chang Chicken Flavor Broth Mix (L)",
    Brands[3],
    Subcatalogs[7],
    "ChangChickenBrothL",
    null,
    false,
    false
  ),
  getProduct(
    "Chang Chicken Flavor Broth Mix (S)",
    Brands[3],
    Subcatalogs[7],
    "ChangChickenBrothS",
    null,
    false,
    false
  ),
  getProduct(
    "Chang Vegetable Flavor Broth Mix (L)",
    Brands[3],
    Subcatalogs[7],
    "ChangVegetableBrothL",
    null,
    false,
    false
  ),
  getProduct(
    "Chang Vegetable Flavor Broth Mix (S)",
    Brands[3],
    Subcatalogs[7],
    "ChangVegetableBrothS",
    null,
    false,
    false
  ),
  getProduct(
    "C.T.F. Brand Tapioca Pearls",
    Brands[4],
    Subcatalogs[8],
    "CTFTapiocaPearls",
    null,
    false,
    false
  ),
  getProduct(
    "C.T.F. Brand Tapioca Starch",
    Brands[4],
    Subcatalogs[8],
    "CTFTapiocaStarch",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Bitter Melon Tea",
    Brands[5],
    Subcatalogs[9],
    "EBQBitterMelonTea",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Dandelion Tea",
    Brands[5],
    Subcatalogs[9],
    "EBQDandelionTea",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Dongguan Rice Vermicelli",
    Brands[5],
    Subcatalogs[1],
    "EBQDongguanRiceVermicelli",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Hibiscus Tea",
    Brands[5],
    Subcatalogs[9],
    "EBQHibiscusTea",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Honeysuckle Tea",
    Brands[5],
    Subcatalogs[9],
    "EBQHoneysuckleTea",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Natural Sea Salt",
    Brands[5],
    Subcatalogs[5],
    "EBQNaturalSeaSalt",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Neem Tea",
    Brands[5],
    Subcatalogs[9],
    "EBQNeemTea",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Papaya Tea",
    Brands[5],
    Subcatalogs[9],
    "EBQPapayaTea",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Rice Vermicelli (Banh Hoi)",
    Brands[5],
    Subcatalogs[1],
    "EBQRiceVermicelli",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Spring Roll Skin (Banh Trang Deo)",
    Brands[5],
    Subcatalogs[2],
    "EBQSpringRollSkin",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Spring Roll Skin (Banh Trang Cha Gio)",
    Brands[5],
    Subcatalogs[2],
    "EBQSpringRollSkin2",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Tapioca Starch",
    Brands[5],
    Subcatalogs[8],
    "EBQTapiocaStarch",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Tumeric Tea",
    Brands[5],
    Subcatalogs[9],
    "EBQTumericTea",
    null,
    false,
    false
  ),
  getProduct(
    "Asian Boy Vegetarian Noodles",
    Brands[5],
    Subcatalogs[1],
    "EBQVegetarianNoodles",
    null,
    false,
    false
  ),
  getProduct(
    "Elephant World Dried Cinnamon Sticks",
    Brands[6],
    Subcatalogs[6],
    "EWDriedCinnamonSticks",
    null,
    false,
    false
  ),
  getProduct(
    "Elephant World Mixed Spice",
    Brands[6],
    Subcatalogs[6],
    "EWMixedSpices",
    null,
    false,
    false
  ),
  getProduct(
    "Five Crabs (Nam Con Cua) Fish Sauce",
    Brands[7],
    Subcatalogs[4],
    "FiveCrabsFishSauce",
    null,
    false,
    false
  ),
  getProduct(
    "Megachef Fish Sauce",
    Brands[7],
    Subcatalogs[4],
    "MegaChefFishSauce",
    null,
    false,
    false
  ),
  getProduct(
    "Megachef Oyster Sauce",
    Brands[7],
    Subcatalogs[4],
    "MegaChefOysterSauce",
    null,
    false,
    false
  ),
  getProduct(
    "Nescafe Cafe Viet Black Iced Coffee",
    Brands[9],
    Subcatalogs[10],
    "NescafeBlackIcedCoffee",
    null,
    false,
    false
  ),
  getProduct(
    "Nescafe Cafe Viet Milky Iced Coffee (Cafe Sữa Đá)",
    Brands[9],
    Subcatalogs[10],
    "NescafeMilkyIcedCoffee",
    null,
    false,
    false
  ),
  getProduct(
    "Nguyen Gia Bun Bo Hue",
    Brands[10],
    Subcatalogs[1],
    "NguyenGiaBunBoHueNoodles",
    null,
    false,
    false
  ),
  getProduct(
    "Nguyen Gia 9999 Fish Sauce",
    Brands[10],
    Subcatalogs[4],
    "NguyenGiaFishSauce",
    null,
    false,
    false
  ),
  getProduct(
    "Nguyen Gia Rice Noodles",
    Brands[10],
    Subcatalogs[1],
    "NguyenGiaRedRiceNoodles",
    null,
    false,
    false
  ),
  getProduct(
    "Nguyen Gia Rice Noodles Family Pack",
    Brands[10],
    Subcatalogs[1],
    "NguyenGiaRiceNoodlesFamPack",
    null,
    true,
    false
  ),
  getProduct(
    "Nguyen Gia Natural Sea Salt",
    Brands[10],
    Subcatalogs[5],
    "NguyenGiaSeaSalt",
    null,
    false,
    false
  ),
  getProduct(
    "Squid Fish Sauce",
    Brands[11],
    Subcatalogs[4],
    "SquidFishSauce",
    null,
    false,
    false
  ),
  getProduct(
    "Three Crab (Ba Con Cua) Fish Sauce (L)",
    Brands[12],
    Subcatalogs[4],
    "ThreeCrabsFishSauceL",
    null,
    false,
    false
  ),
  getProduct(
    "Three Crab (Ba Con Cua) Fish Sauce (S)",
    Brands[12],
    Subcatalogs[4],
    "ThreeCrabsFishSauceS",
    null,
    false,
    false
  ),
];

export default Products;
