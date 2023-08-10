import React, { useState } from "react";
import "./App.css";
import { Layout, Menu, theme } from "antd";
import ProductCatalog from "./pages/ProductCatalog";
import { MenuBarContainer, RedirectContainer } from "./style";
import HungryMamaLogo from "./assets/Logos/HungryMamaLogo.png";
import Icon from "@ant-design/icons";
import TikTok from "./assets/Logos/Tiktok.png";
import Instagram from "./assets/Logos/Instagram.png";
import GlobalFonts from "./fonts/fonts";
import AboutUs from "./pages/AboutUs";
import VinasenHatNem from "./assets/Home/VinasenHatNem.JPG";

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
const aboutUs = {
  label: "About Us",
  key: "about",
};

function App() {
  const [type, setType] = useState("home");

  return (
    <Layout className="layout">
      <GlobalFonts />
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
            <a href="https://www.tiktok.com/@imhungrymama" target="_blank">
              <Icon
                component={() => <img className="link-btn" src={TikTok} />}
              />
            </a>
            <a href="https://www.instagram.com/imahungrymama/" target="_blank">
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
        {type === "home" ? (
          <img src={VinasenHatNem} />
        ) : type === "about" ? (
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
