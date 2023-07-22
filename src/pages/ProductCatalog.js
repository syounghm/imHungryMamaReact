import React from "react";
import { Row, Col, Image } from "antd";
import fetchCatalogImage from "../utils/fetchCatalogImage.js";
import RiceNoodles from "../data/RiceNoodles.js";
import Sauces from "../data/Sauces";

const ProductCatalog = (props) => {
  const { type } = props;
  console.log(RiceNoodles);
  RiceNoodles.map((subCatalog) => {
    console.log(subCatalog);
  });

  return (
    <>
      <p>Hello {`${type}`}</p>
      <Row>
        {RiceNoodles.map((subCatalog) => {
          return (
            <Col span={24}>
              <h1>{`${subCatalog[0]}`}</h1>
              {subCatalog[1].map((symbol) => {
                return (
                  <Col span={6}>
                    <Image src={fetchCatalogImage(symbol)} />
                  </Col>
                );
              })}
            </Col>
          );
        })}
      </Row>
    </>
  );
};
export default ProductCatalog;
