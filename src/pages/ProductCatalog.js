import React, { useEffect, useState } from "react";
import { Row, Col, Image } from "antd";
import fetchCatalogImage from "../utils/fetchCatalogImage.js";
import RiceNoodles from "../data/RiceNoodles.js";
import Sauces from "../data/Sauces";
import { CatalogContainer } from "./style.js";

const ProductCatalog = (props) => {
  const { type } = props;
  const [productType, setProductType] = useState();
  const getData = { 1: RiceNoodles, 2: Sauces };
  useEffect(() => {
    setProductType();
  }, [type]);

  return (
    <CatalogContainer>
      <p>Hello {`${type}`}</p>
      {getData[type]?.map((subCatalog) => {
        return (
          <Row>
            <Col span={24}>
              <h1>{`${subCatalog[0]}`}</h1>
            </Col>
            {subCatalog[1].map((symbol) => {
              return (
                <Col span={6}>
                  <Image src={fetchCatalogImage(symbol)} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </CatalogContainer>
  );
};
export default ProductCatalog;
