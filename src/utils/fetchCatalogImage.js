import BCNCoconutCandy from "../assets/BCNCoconutCandy.jpg";
import BCNGingerCoconutCandy from "../assets/BCNGingerCoconutCandy.jpg";
import BCNGuavaCoconutCandy from "../assets/BCNGuavaCoconutCandy.jpg";
import BCNMangoSoftCandy from "../assets/BCNMangoSoftCandy.jpg";
import BCNRedCargoRice from "../assets/BCNRedCargoRice.jpg";
import BCNThaiGlutinousRice from "../assets/BCNThaiGlutinousRice.jpg";

import ChangBeefBrothL from "../assets/ChangBeefBrothL.jpg";
import ChangBeefBrothS from "../assets/ChangBeefBrothS.jpg";
import ChangChickenBrothL from "../assets/ChangChickenBrothL.jpg";
import ChangChickenBrothS from "../assets/ChangChickenBrothS.jpg";
import ChangVegetableBrothL from "../assets/ChangVegetableBrothL.jpg";
import ChangVegetableBrothS from "../assets/ChangVegetableBrothS.jpg";

import CTFTapiocaPearls from "../assets/CTFTapiocaPearls.jpg";
import CTFTapiocaStarch from "../assets/CTFTapiocaStarch.jpg";

import EBQBitterMelonTea from "../assets/EBQBitterMelonTea.jpg";
import EBQDandelionTea from "../assets/EBQDandelionTea.jpg";
import EBQDongGuanRiceVermicelli from "../assets/EBQDongGuanRiceVermicelli.jpg";
import EBQHibiscusTea from "../assets/EBQHibiscusTea.jpg";
import EBQHoneysuckleTea from "../assets/EBQHoneysuckleTea.jpg";
import EBQNaturalSeaSalt from "../assets/EBQNaturalSeaSalt.jpg";
import EBQNeemTea from "../assets/EBQNeemTea.jpg";
import EBQPapayaTea from "../assets/EBQPapayaTea.jpg";
import EBQRiceVermicelli from "../assets/EBQRiceVermicelli.jpg";
import EBQSpringRollSkin from "../assets/EBQSpringRollSkin.jpg";
import EBQSpringRollSkin2 from "../assets/EBQSpringRollSkin2.jpg";
import EBQTapiocaStarch from "../assets/EBQTapiocaStarch.jpg";
import EBQTumericTea from "../assets/EBQTumericTea.jpg";
import EBQVegetarianNoodles from "../assets/EBQVegetarianNoodles.jpg";

import EWDriedCinnamonSticks from "../assets/EWDriedCinnamonSticks.jpg";
import EWMixedSpices from "../assets/EWMixedSpices.jpg";

import FiveCrabsFishSauce from "../assets/FiveCrabsFishSauce.jpg";

import ACShrimpCup from "../assets/ACShrimpCup.jpg";
import ACHaoHaoOnion from "../assets/ACHaoHaoOnion.jpg";
import ACHaoHaoVeg from "../assets/ACHaoHaoVeg.jpg";

import MegaChefFishSauce from "../assets/MegaChefFishSauce.jpg";
import MegaChefOysterSauce from "../assets/MegaChefOysterSauce.jpg";

import NesCafeBlackIcedCoffee from "../assets/NesCafeBlackIcedCoffee.jpg";
import NesCafeMilkyIcedCoffee from "../assets/NesCafeMilkyIcedCoffee.jpg";

import NguyenGiaBunBoHueNoodles from "../assets/NguyenGiaBunBoHueNoodles.jpg";
import NguyenGiaFishSauce from "../assets/NguyenGiaFishSauce.jpg";
import NguyenGiaRiceNoodles from "../assets/NguyenGiaRiceNoodles.jpg";
import NguyenGiaRiceNoodlesFamPack from "../assets/NguyenGiaRiceNoodlesFamPack.jpg";
import NguyenGiaSeaSalt from "../assets/NguyenGiaSeaSalt.jpg";

import SquidFishSauce from "../assets/SquidFishSauce.jpg";

import ThreeCrabFishSauceL from "../assets/ThreeCrabFishSauceL.jpg";

import ThreeCrabFishSauceS from "../assets/ThreeCrabFishSauceS.jpg";

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
    ACShrimpCup,
    ACHaoHaoOnion,
    ACHaoHaoVeg,
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
