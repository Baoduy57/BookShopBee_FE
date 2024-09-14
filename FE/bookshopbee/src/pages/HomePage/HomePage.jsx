import React from "react";
import TypeProduct from "../../component/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import SliderComponent from "../../component/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import CardComponent from "../../component/CardComponent/CardComponent";
import NavbarComponent from "../../component/NavbarComponent/NavbarComponent";
const HomePage = () => {
  const arr = [
    "Sách Tình cảm",
    "Sách Bí ẩn",
    "Sách Kinh dị, giật gân",
    "Sách truyền cảm hứng",
  ];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item}></TypeProduct>;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "2000px",
        }}
      >
        <SliderComponent
          arrImages={[slider1, slider2, slider3]}
        ></SliderComponent>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CardComponent></CardComponent>
        </div>
        <NavbarComponent></NavbarComponent>
      </div>
      HomePage
    </>
  );
};

export default HomePage;
