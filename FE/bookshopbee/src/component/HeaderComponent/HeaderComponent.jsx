import { Badge, Col } from "antd";
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
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={6}>
          <WrapperTextHeader>BookShopBee</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            border="false"
            placeholder="input search text"
            // onSearch={onSearch}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
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
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "white" }}
              />
            </Badge>
            <WrapperTextSmallHeader>Giỏ hàng </WrapperTextSmallHeader>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
