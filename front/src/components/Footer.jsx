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

const Item = styled.li`
  text-decoration: none;
  list-style-type: none;
  display: inline;
  padding: 20px;
`;
const ItemText = styled.div`
  padding: 20px;
`;

export default function Footer() {
  return (
    <Wrap>
      <Inner>
        <ul>
          <Item>위치: 대구광역시 수성구 범안8길 19</Item>
          <Item>목사님: 서정현 목사님</Item>
          <Item>전화번호(Tel): 052 - xxxx - xxxx</Item>
        </ul>
        <ItemText>Copyright ⓒ 2022 한마음교회 All Rights reserved.</ItemText>
      </Inner>
    </Wrap>
  );
}
