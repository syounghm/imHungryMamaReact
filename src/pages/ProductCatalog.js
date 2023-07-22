import React from "react";
import RiceNoodles from "../data/RiceNoodles";
import Sauces from "../data/Sauces";

const ProductCatalog = (props) => {
  const { type } = props;
  RiceNoodles.map(({ subCatalog, symbols }) => {
    console.log(symbols);
  });

  return <>Hello {`${type}`}</>;
};
export default ProductCatalog;
