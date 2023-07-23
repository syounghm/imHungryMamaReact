import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "antd";
import fetchCatalogImage from "../utils/fetchCatalogImage.js";
import RiceNoodles from "../data/RiceNoodles.js";
import Sauces from "../data/Sauces";
import { PageContainer } from "./style.js";
import TapiocaProducts from "../data/TapiocaProducts.js";
import Candies from "../data/Candies.js";

const ProductCatalog = (props) => {
  const { type } = props;
  const [productType, setProductType] = useState();
  const getData = {
    1: RiceNoodles,
    2: Sauces,
    // 3: SSB,
    4: TapiocaProducts,
    // 5: TeasCoffees,
    6: Candies,
  };
  useEffect(() => {
    setProductType();
  }, [type]);

  return (
    <PageContainer>
      {/* <p>Hello {`${type}`}</p> */}
      {getData[type]?.map((subCatalog) => {
        return (
          <Row>
            <Col span={24}>
              <h1>{`${subCatalog[0]}`}</h1>
            </Col>
            {subCatalog[1].map((symbol) => {
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
