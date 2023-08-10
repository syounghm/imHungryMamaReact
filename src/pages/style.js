import styled from "styled-components";

export const PageContainer = styled.div`
  h1 {
    font-family: "BBBouquet-Regular";
    color: #cc462b;
    text-align: center;
    font-size: 60px;
    padding-bottom: 5px;
    text-decoration: underline;
    margin-top: auto;
    /* margin-bottom: -35px; */
  }

  .ant-image-img {
    width: 22vw;
    height: 50vh;
    object-fit: contain;
  }
  .ant-card-body {
    width: 22vw;
  }
  .ant-card-cover img {
    border-radius: 0px;
  }
  .ant-card-meta-title {
    white-space: normal;
    text-overflow: revert;
    text-align: center;
  }
`;

export const AboutUsContainer = styled.div`
  font-family: "BBBouquet-Regular";
  font-size: larger;
  width: 700px;
  margin: auto;
  color: #252f3d;
`;

export const CardContainer = styled.div`
  .card-meta {
    white-space: normal;
  }
`;
