import React, { useState } from "react";
import "./App.css";
import { Layout, Menu, theme } from "antd";
import ProductCatalog from "./pages/ProductCatalog";
import { MenuBarContainer, RedirectContainer } from "./style";
import HungryMamaLogo from "./assets/logos/hungrymamalogo.png";
import Icon from "@ant-design/icons";
import TikTok from "./assets/logos/tiktok.png";
import Instagram from "./assets/logos/instagram.png";
import Amazon from "./assets/logos/amazon.png";
import AboutUs from "./pages/AboutUs";

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
const catalog = {
  label: "Product Catalog",
  children: items,
  key: "sub1",
};
// const home = {
//   label: "Home",
//   key: "home",
// };
const aboutUs = {
  label: "About Us",
  key: "about",
};

function App() {
  const [type, setType] = useState("home");

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
          <div className="main-logo">
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
            defaultSelectedKeys="home"
            items={[catalog, aboutUs]}
          />{" "}
          <RedirectContainer>
            <Icon component={() => <img id="amazon" src={Amazon} />} />
            <a href="https://www.tiktok.com/@imhungrymama">
              <Icon
                component={() => <img className="link-btn" src={TikTok} />}
              />
            </a>
            <a href="https://www.instagram.com/imahungrymama/">
              <Icon
                component={() => <img className="link-btn" src={Instagram} />}
              />
            </a>
          </RedirectContainer>
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
        {type === "home" ? null : type === "about" ? (
          <AboutUs />
        ) : (
          <ProductCatalog type={type} />
        )}
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
