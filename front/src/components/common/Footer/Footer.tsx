import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  margin: 30px 0 0;
  padding: 0px;
  width: 100%;
  height: 100%;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;
const Items = styled.ul`
  display: flex;
  justify-content: center;
`;
const Item = styled.li`
  text-decoration: none;
  list-style-type: none;
  display: inline;
  padding: 20px;
  font-size: 1.5vh;
`;
const ItemText = styled.div`
  font-size: 1.5vh;
  padding: 20px;
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <Items>
          <Item>위치: 대구광역시 수성구 범안8길 19</Item>
          <Item>담임 목사: 서정현</Item>
          <Item>전화번호(Tel): 053 - 784 - 0916</Item>
        </Items>
        <ItemText>Copyright ⓒ 2022 한마음교회 All Rights reserved.</ItemText>
      </Inner>
    </Wrap>
  );
}
