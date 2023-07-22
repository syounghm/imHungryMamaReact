import React, { useState } from "react";
import "./App.css";
import { Layout, Menu, theme } from "antd";
import ProductCatalog from "./pages/ProductCatalog";

const { Header, Content, Footer } = Layout;
function getItem(label, key) {
  return {
    label,
    key,
  };
}
const items = [
  getItem("Rice & Noodles", "1"),
  getItem("Sauces", "2"),
  getItem("Seasonings, Spices, & Broth Mixes", "3"),
  getItem("Tapioca Products", "4"),
  getItem("Teas & Coffees", "5"),
  getItem("Candies", "6"),
];

function App() {
  const [type, setType] = useState("");
  return (
    <Layout className="layout">
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#cc462b",
        }}
      >
        <div className="demo-logo" />
        <Menu
          onClick={(item, key) => setType(item.key)}
          className="menuBar"
          style={{ backgroundColor: "#cc462b" }}
          mode="horizontal"
          // defaultSelectedKeys={["2"]}
          items={items}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content" style={{}}>
          Content
        </div>
        <ProductCatalog type={type} />
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
}
export default App;
