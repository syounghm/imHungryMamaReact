import React, { useState } from "react";
import "./App.css";
import { Layout, Menu, theme } from "antd";
import ProductCatalog from "./pages/ProductCatalog";
import { MenuBarContainer } from "./style";
import HungryMamaLogo from "./assets/logos/hungrymamalogo.png";
import Icon from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
function getItem(label, key, icon) {
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
          backgroundColor: "white",
          height: "75px",
        }}
      >
        <MenuBarContainer>
          <div className="demo-logo">
            <Icon component={() => <img id="mama" src={HungryMamaLogo} />} />
          </div>
          <Menu
            onClick={(item, key) => setType(item.key)}
            className="menuBar"
            style={{
              backgroundColor: "white",
              height: "70px",
              width: "100%",
              marginTop: "15px",
            }}
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            items={items}
          />{" "}
        </MenuBarContainer>
      </Header>
      <Content
        style={{
          backgroundColor: "white",
          padding: "0 50px",
        }}
      >
        <div className="site-layout-content" style={{}}>
          {/* Content */}
        </div>
        <ProductCatalog type={type} />
      </Content>
      <Footer
        style={{
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        {/* Ant Design ©2023 Created by Ant UED */}
      </Footer>
    </Layout>
  );
}
export default App;
