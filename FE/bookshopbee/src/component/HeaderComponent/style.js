import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  padding: 15px 120px;
  background-color: rgb(26, 148, 255);
  aligh-item: center;
  gap: 16px;
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  color: white;
  font-weight: bold;
  font-size: 25px;
  text-align: left;
`;

export const WrapperAccountHeader = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 10px;
  font-size: 15px;
`;

export const WrapperTextSmallHeader = styled.span`
  color: white;
  font-weight: bold;
  font-size: 15px;
  white-space: nowrap;
`;
