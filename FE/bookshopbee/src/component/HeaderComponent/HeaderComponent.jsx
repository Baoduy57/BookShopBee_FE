import { Col } from "antd";
import React from "react";
import {
  WrapperAccountHeader,
  WrapperHeader,
  WrapperTextHeader,
  WrapperTextSmallHeader,
} from "./style";
import Search from "antd/es/transfer/search";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>BookShopBee</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <Search
            placeholder="input search text"
            // onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
          <WrapperAccountHeader>
            <UserOutlined style={{ fontSize: "30px", paddingLeft: "10px" }} />
            <div>
              <WrapperTextSmallHeader>Đăng nhập/Đăng ký</WrapperTextSmallHeader>
              <div>
                <WrapperTextSmallHeader>Tài khoản</WrapperTextSmallHeader>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperAccountHeader>
          <div>
            <ShoppingCartOutlined
              style={{ fontSize: "30px", color: "white" }}
            />
            <WrapperTextSmallHeader>Giỏ hàng </WrapperTextSmallHeader>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
