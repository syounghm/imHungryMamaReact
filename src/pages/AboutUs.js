import TBPhoto from "../assets/aboutus/tbphoto.png";
import { AboutUsContainer, PageContainer } from "./style.js";

const AboutUs = (props) => {
  return (
    <PageContainer>
      <h1>About Us</h1>
      <img
        src={TBPhoto}
        style={{
          display: "block",
          marginTop: "-40px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <AboutUsContainer>
        <p>
          In my family, we call my grandma “Mama,” and whenever I was hungry I
          would say, “Hungry Mama!” Mama’s cooking would always bring me back to
          my childhood.
        </p>
        <p>
          At Hungry Mama, our mission is to share the tasty flavors Southeast
          Asia has to offer with food lovers like you. We have carefully curated
          a collection of authentic, high-quality products that allows everyone
          to recreate and experience the traditional dishes our Mamas cooked
          when they were young.
        </p>
      </AboutUsContainer>
    </PageContainer>
  );
};

export default AboutUs;
