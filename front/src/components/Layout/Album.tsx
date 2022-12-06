import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox,
  DivideBox,
  Img,
  ContentsBox,
  InfoTitleDiv,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;
const Inner = styled.div`
  width: 30%;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const YearText = styled.div`
  font-weight: bold;
  font-size: 2em;
`;
export default function Album() {
  useState();
  useEffect(() => {}, []);

  return (
    <Wrap>
      <ImgBox>
        <Img src={Rainbow250} alt="" width="100%" height="100%" margin="auto" />
      </ImgBox>
      <DivideBox>
        <Sidebar title="교회 앨범" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">교회 앨범</InfoTitleDiv>
          <YearText>2022</YearText>
          <Container>
            <Inner>
              <Image src="/Album/1.jpg"></Image>
              <Image src="/Album/2.jpg"></Image>
              <Image src="/Album/3.jpg"></Image>
              <Image src="/Album/4.jpg"></Image>
              <Image src="/Album/4.jpg"></Image>
              <Image src="/Album/4.jpg"></Image>
            </Inner>
            <Inner>
              <Image src="/Album/5.jpg"></Image>
              <Image src="/Album/4.jpg"></Image>
              <Image src="/Album/6.jpg"></Image>
              <Image src="/Album/10.jpg"></Image>
              <Image src="/Album/4.jpg"></Image>
              <Image src="/Album/7.jpg"></Image>
            </Inner>
            <Inner>
              <Image src="/Album/8.jpg"></Image>
              <Image src="/Album/9.jpg"></Image>
              <Image src="/Album/10.jpg"></Image>
              <Image src="/Album/4.jpg"></Image>
              <Image src="/Album/11.jpg"></Image>
            </Inner>
          </Container>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
