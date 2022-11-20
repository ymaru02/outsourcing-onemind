import React from "react";
import styled from "styled-components";

export default function Location() {
  return (
    <Wrap>
      <ContentsBox>
        <TitleBox>연락처</TitleBox>
      </ContentsBox>
      <ContentsBox>
        <TitleBox>지도</TitleBox>
      </ContentsBox>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  padding: 25px 0 25px 0;
  border: 1px solid red;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ContentsBox = styled.div`
  max-width: 1280px;
  border: 1px solid green;
`;

const TitleBox = styled.div`
  text-align: center;
`;
