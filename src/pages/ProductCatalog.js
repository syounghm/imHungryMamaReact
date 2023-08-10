import React from "react";
import { Row, Col, Image, Card } from "antd";
import fetchCatalogImage from "../utils/fetchCatalogImage.js";
import { PageContainer } from "./style.js";
import Catalogs from "../data/Catalogs/Catalogs.js";
import Subcatalogs from "../data/Subcatalogs/Subcatalogs.js";
import Products from "../data/Products/Products.js";
import Amazon from "../assets/Logos/Amazon.png";

const ProductCatalog = (props) => {
  const { type } = props;

  const getSubcatalogListing = (type) => {
    const curCatalog = Catalogs[type].name;
    const subcatalogList = Subcatalogs.filter(
      ({ catalog }) => catalog.name === curCatalog
    );

    return subcatalogList.map((subcat) => {
      return (
        <Row
          gutter={[{ xs: 8, sm: 16, md: 32, lg: 48 }, 32]}
          // gutter={[16, 16]}
        >
          <Col span={24}>
            <h1>{`${subcat.name}`}</h1>
          </Col>
          {Products.filter(({ subcatalog }) => subcatalog === subcat).map(
            ({ symbol, name, price, amazonLink }) => {
              return (
                <Col span={6} style={{ height: "100%" }}>
                  {/* <Image src={fetchCatalogImage(symbol)} preview={false} />
                  <h2>{name}</h2> */}
                  <Card
                    style={{ border: "0px" }}
                    cover={
                      <div style={{ height: "100%", position: "inline" }}>
                        <a
                          href={amazonLink ? amazonLink : null}
                          target="_blank"
                          style={{ cursor: amazonLink ? "pointer" : "default" }}
                        >
                          <Image
                            src={fetchCatalogImage(symbol)}
                            preview={false}
                            style={{ position: "relative" }}
                          />
                          {amazonLink ? (
                            <img
                              src={Amazon}
                              style={{
                                height: "15px",
                                position: "absolute",
                                zIndex: "1",
                                right: "0px",
                                top: "0px",
                              }}
                            />
                          ) : null}
                        </a>
                      </div>
                    }
                    className="item"
                  >
                    <Card.Meta
                      title={name}
                      description={`${price ? "$" + price : ""}`}
                      className="card-meta"
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
