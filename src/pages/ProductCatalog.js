import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "antd";
import fetchCatalogImage from "../utils/fetchCatalogImage.js";
import RiceNoodles from "../data/RiceNoodles.js";
import Sauces from "../data/Sauces";
import { PageContainer } from "./style.js";
import TapiocaProducts from "../data/TapiocaProducts.js";
import Candies from "../data/Candies.js";
import Seasonings from "../data/Seasonings.js";
import TeasCoffees from "../data/TeasCoffees.js";

const ProductCatalog = (props) => {
  const { type } = props;
  const getData = {
    1: RiceNoodles,
    2: Sauces,
    3: Seasonings,
    4: TapiocaProducts,
    5: TeasCoffees,
    6: Candies,
  };
  useEffect(() => {
    setProductType();
  }, [type]);

  return (
    <PageContainer>
      {/* <p>Hello {`${type}`}</p> */}
      Steven is ass
      {getData[type]?.map((subCatalog) => {
        return (
          <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
            <Col span={24}>
              <h1>{`${subCatalog.name}`}</h1>
            </Col>
            {subCatalog.symbols.map((symbol) => {
              return (
                <Col span={6}>
                  <Image src={fetchCatalogImage(symbol)} preview={false} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </PageContainer>
  );
};
export default ProductCatalog;
