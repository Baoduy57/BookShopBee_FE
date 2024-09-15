import styled from "styled-components";
import ButtonComponent from "../../component/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  justify-content: flex-start;
  border-bottom: 1px solid gray;
  height: 44px;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background: rgb(13, 92, 182);
    span {
      color: #fff;
    }
  }
    
  }
`;

export const WrapperProduct = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;
