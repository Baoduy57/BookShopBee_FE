import React from "react";
import TypeProduct from "../../component/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";

const HomePage = () => {
  const arr = [
    "Sách Tình cảm",
    "Sách Bí ẩn",
    "Sách Kinh dị, giật gân",
    "Sách truyền cảm hứng",
  ];
  return (
    <div style={{ padding: "0 120px" }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item}></TypeProduct>;
        })}
      </WrapperTypeProduct>
      HomePage
    </div>
  );
};

export default HomePage;
