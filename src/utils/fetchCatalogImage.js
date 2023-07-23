import BCNCoconutCandy from "../assets/BCNCoconutCandy.png";
import BCNGingerCoconutCandy from "../assets/BCNGingerCoconutCandy.png";
import BCNGuavaCoconutCandy from "../assets/BCNGuavaCoconutCandy.png";
import BCNMangoSoftCandy from "../assets/BCNMangoSoftCandy.png";
import BCNRedCargoRice from "../assets/BCNRedCargoRice.png";
import BCNThaiGlutinousRice from "../assets/BCNThaiGlutinousRice.png";
import ChangBeefBrothL from "../assets/ChangBeefBrothL.png";
import ChangBeefBrothS from "../assets/ChangBeefBrothS.png";
import ChangChickenBrothL from "../assets/ChangChickenBrothL.png";
import ChangChickenBrothS from "../assets/ChangChickenBrothS.png";
import ChangVegetableBrothL from "../assets/ChangVegetableBrothL.png";
import ChangVegetableBrothS from "../assets/ChangVegetableBrothS.png";
import CTFTapiocaPearls from "../assets/CTFTapiocaPearls.png";
import CTFTapiocaStarch from "../assets/CTFTapiocaStarch.png";
import EBQBitterMelonTea from "../assets/EBQBitterMelonTea.png";
import EBQDandelionTea from "../assets/EBQDandelionTea.png";
import EBQDongGuanRiceVermicelli from "../assets/EBQDongGuanRiceVermicelli.png";
import EBQHibiscusTea from "../assets/EBQHibiscusTea.png";
import EBQHoneysuckleTea from "../assets/EBQHoneysuckleTea.png";
import EBQNaturalSeaSalt from "../assets/EBQNaturalSeaSalt.png";
import EBQNeemTea from "../assets/EBQNeemTea.png";
import EBQPapayaTea from "../assets/EBQPapayaTea.png";
import EBQRiceVermicelli from "../assets/EBQRiceVermicelli.png";
import EBQSpringRollSkin from "../assets/EBQSpringRollSkin.png";
import EBQSpringRollSkin2 from "../assets/EBQSpringRollSkin2.png";
import EBQTapiocaStarch from "../assets/EBQTapiocaStarch.png";
import EBQTumericTea from "../assets/EBQTumericTea.png";
import EBQVegetarianNoodles from "../assets/EBQVegetarianNoodles.png";
import EWDriedCinnamonSticks from "../assets/EWDriedCinnamonSticks.png";
import EWMixedSpices from "../assets/EWMixedSpices.png";
import FiveCrabsFishSauce from "../assets/FiveCrabsFishSauce.png";
import HaoHaoHotSourShrimpCup from "../assets/HaoHaoHotSourShrimpCup.png";
import HaoHaoSateOnionCup from "../assets/HaoHaoSateOnionCup.png";
import HaoHaoVegetarianCup from "../assets/HaoHaoVegetarianCup.png";
import MegaChefFishSauce from "../assets/MegaChefFishSauce.png";
import MegaChefOysterSauce from "../assets/MegaChefOysterSauce.png";
import NesCafeBlackIcedCoffee from "../assets/NesCafeBlackIcedCoffee.png";
import NesCafeMilkyIcedCoffee from "../assets/NesCafeMilkyIcedCoffee.png";
import NguyenGiaBunBoHueNoodles from "../assets/NguyenGiaBunBoHueNoodles.png";
import NguyenGiaFishSauce from "../assets/NguyenGiaFishSauce.png";
import NguyenGiaRiceNoodles from "../assets/NguyenGiaRiceNoodles.png";
import NguyenGiaRiceNoodlesFamPack from "../assets/NguyenGiaRiceNoodlesFamPack.png";
import NguyenGiaSeaSalt from "../assets/NguyenGiaSeaSalt.png";
import SquidFishSauce from "../assets/SquidFishSauce.png";
import ThreeCrabFishSauceL from "../assets/ThreeCrabFishSauceL.png";
import ThreeCrabFishSauceS from "../assets/ThreeCrabFishSauceS.png";

const fetchCatalogImage = (product) => {
  const listProductImage = {
    BCNCoconutCandy,
    BCNGingerCoconutCandy,
    BCNGuavaCoconutCandy,
    BCNMangoSoftCandy,
    BCNRedCargoRice,
    BCNThaiGlutinousRice,
    ChangBeefBrothL,
    ChangBeefBrothS,
    ChangChickenBrothL,
    ChangChickenBrothS,
    ChangVegetableBrothL,
    ChangVegetableBrothS,
    CTFTapiocaPearls,
    CTFTapiocaStarch,
    EBQBitterMelonTea,
    EBQDandelionTea,
    EBQDongGuanRiceVermicelli,
    EBQHibiscusTea,
    EBQHoneysuckleTea,
    EBQNaturalSeaSalt,
    EBQNeemTea,
    EBQPapayaTea,
    EBQRiceVermicelli,
    EBQSpringRollSkin,
    EBQSpringRollSkin2,
    EBQTapiocaStarch,
    EBQTumericTea,
    EBQVegetarianNoodles,
    EWDriedCinnamonSticks,
    EWMixedSpices,
    FiveCrabsFishSauce,
    HaoHaoHotSourShrimpCup,
    HaoHaoSateOnionCup,
    HaoHaoVegetarianCup,
    MegaChefFishSauce,
    MegaChefOysterSauce,
    NesCafeBlackIcedCoffee,
    NesCafeMilkyIcedCoffee,
    NguyenGiaBunBoHueNoodles,
    NguyenGiaFishSauce,
    NguyenGiaRiceNoodles,
    NguyenGiaRiceNoodlesFamPack,
    NguyenGiaSeaSalt,
    SquidFishSauce,
    ThreeCrabFishSauceL,
    ThreeCrabFishSauceS,
  };
  return listProductImage[product];
};

export default fetchCatalogImage;
