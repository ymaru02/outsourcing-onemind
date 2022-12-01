import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  InfoTitleDiv,
  Img,
} from "../../styles/Intro";
import Sidebar from "./Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";

export default function Worship() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <DivideBox>
        <ImgBox>
          <Img src={Rainbow250} alt="" />
        </ImgBox>
        <Sidebar />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">예배 시간</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>예배 시간표</InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
