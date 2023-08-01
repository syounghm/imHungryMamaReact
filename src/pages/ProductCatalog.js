import React from "react";
import { Row, Col, Image, Card } from "antd";
import fetchCatalogImage from "../utils/fetchCatalogImage.js";
import { PageContainer } from "./style.js";
import Catalogs from "../data/Catalogs/Catalogs.js";
import Subcatalogs from "../data/Subcatalogs/Subcatalogs.js";
import Products from "../data/Products/Products.js";

const ProductCatalog = (props) => {
  const { type } = props;

  const getSubcatalogListing = (type) => {
    const curCatalog = Catalogs[type].name;
    const subcatalogList = Subcatalogs.filter(
      ({ catalog }) => catalog.name === curCatalog
    );

    return subcatalogList.map((subcat) => {
      return (
        <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
          <Col span={24}>
            <h1>{`${subcat.name}`}</h1>
          </Col>
          {Products.filter(({ subcatalog }) => subcatalog === subcat).map(
            ({ symbol, name, price }) => {
              return (
                <Col span={6} style={{ height: "100%" }}>
                  {/* <Image src={fetchCatalogImage(symbol)} preview={false} />
                  <h2>{name}</h2> */}
                  <Card
                    style={{ border: "0px" }}
                    cover={
                      <div style={{ height: "100%" }}>
                        <Image
                          src={fetchCatalogImage(symbol)}
                          preview={false}
                        />{" "}
                      </div>
                    }
                  >
                    <Card.Meta
                      title={name}
                      description={`${price ? "$" + price : ""}`}
                    />
                  </Card>
                </Col>
              );
            }
          )}
        </Row>
      );
    });
  };

  return (
    <PageContainer>
      <h1>{Catalogs.type}</h1>
      {getSubcatalogListing(type)}
    </PageContainer>
  );
};
export default ProductCatalog;
