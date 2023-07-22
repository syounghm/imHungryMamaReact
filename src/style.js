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
  && .ant-menu-item-selected::after {
    border-bottom-width: 2px !important;
    border-bottom-color: #cc462b !important;
  }
  && .ant-layout-header {
  }
`;

// margin-top: 15px
