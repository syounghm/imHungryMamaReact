import styled from "styled-components";

export const MenuBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  span {
    font-family: "BBBouquet-Regular";
    color: #cc462b;
    font-size: 20px;
  }
  && .ant-menu-item:hover::after {
    border-bottom: 2px solid #cc462b !important;
    line-height: 32px !important;
  }
  && .ant-menu-item-selected::after,
  && .ant-menu-submenu:hover::after,
  && .ant-menu-submenu-selected::after {
    border-bottom-width: 2px !important;
    border-bottom-color: #cc462b !important;
  }
  .ant-menu-submenu-item-selected,
  .ant-menu-submenu-item:hover {
    background-color: black !important;
    border-bottom-width: 2px !important;
    border-bottom-color: #cc462b !important;
  }
`;

export const RedirectContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  .link-btn {
    width: 50px;
    height: 50px;
    margin-top: 25px;
  }
  #amazon {
    height: 35px;
    margin-top: 35px;
    margin-right: 10px;
  }
`;
