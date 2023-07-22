import BCNCoconutCandy from "../assets/BCNCoconutCandy.png";
import BCNGingerCoconutCandy from "../assets/BCNGingerCoconutCandy.png";
import BCNGuavaCoconutCandy from "../assets/BCNGuavaCoconutCandy.png";
import BCNMangoSoftCandy from "../assets/BCNMangoSoftCandy.png";
import BCNThaiGlutinousRice from "../assets/BCNThaiGlutinousRice.png";
import CTFTapiocaPearls from "../assets/CTFTapiocaPearls.png";
import CTFTapiocaStarch from "../assets/CTFTapiocaStarch.png";
import EBQDongGuanRiceVermicelli from "../assets/EBQDongGuanRiceVermicelli.png";
import EBQRiceVermicelli from "../assets/EBQRiceVermicelli.png";
import EBQSpringRollSkin from "../assets/EBQSpringRollSkin.png";
import EBQTapiocaStarch from "../assets/EBQTapiocaStarch.png";
import EBQVegetarianNoodles from "../assets/EBQVegetarianNoodles.png";
import FiveCrabsFishSauce from "../assets/FiveCrabsFishSauce.png";
import HaoHaoHotSourShrimpCup from "../assets/HaoHaoHotSourShrimpCup.png";
import HaoHaoSateOnionCup from "../assets/HaoHaoSateOnionCup.png";
import HaoHaoVegetarianCup from "../assets/HaoHaoVegetarianCup.png";
import MegaChefFishSauce from "../assets/MegaChefFishSauce.png";
import MegaChefOysterSauce from "../assets/MegaChefOysterSauce.png";
import NguyenGiaBunBoHueNoodles from "../assets/NguyenGiaBunBoHueNoodles.png";
import NguyenGiaFishSauce from "../assets/NguyenGiaFishSauce.png";
import NguyenGiaRiceNoodles from "../assets/NguyenGiaRiceNoodles.png";
import NguyenGiaRiceNoodlesFamPack from "../assets/NguyenGiaRiceNoodlesFamPack.png";
import SquidFishSauce from "../assets/SquidFishSauce.png";
import ThreeCrabFishSauceL from "../assets/ThreeCrabFishSauceL.png";
import ThreeCrabFishSauceS from "../assets/ThreeCrabFishSauceS.png";

const fetchCatalogImage = (product) => {
  const listProductImage = {
    BCNCoconutCandy,
    BCNGingerCoconutCandy,
    BCNGuavaCoconutCandy,
    BCNMangoSoftCandy,
    BCNThaiGlutinousRice,
    CTFTapiocaPearls,
    CTFTapiocaStarch,
    EBQDongGuanRiceVermicelli,
    EBQRiceVermicelli,
    EBQSpringRollSkin,
    EBQTapiocaStarch,
    EBQVegetarianNoodles,
    FiveCrabsFishSauce,
    HaoHaoHotSourShrimpCup,
    HaoHaoSateOnionCup,
    HaoHaoVegetarianCup,
    MegaChefFishSauce,
    MegaChefOysterSauce,
    NguyenGiaBunBoHueNoodles,
    NguyenGiaFishSauce,
    NguyenGiaRiceNoodles,
    NguyenGiaRiceNoodlesFamPack,
    SquidFishSauce,
    ThreeCrabFishSauceL,
    ThreeCrabFishSauceS,
  };
  return listProductImage[product];
};

export default fetchCatalogImage;
