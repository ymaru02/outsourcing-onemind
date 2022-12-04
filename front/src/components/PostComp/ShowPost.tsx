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
  TinyTitle,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import worshipImg from "../../img/worship.jpg";

export default function Worship() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <ImgBox>
        <Img src={Rainbow250} alt="" width="100%" height="100%" margin="auto" />
      </ImgBox>
      <DivideBox>
        <Sidebar />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">글 작성</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <TinyTitle fontsize="18px">예배 시간표</TinyTitle>
              <Img
                src={worshipImg}
                alt=""
                width="100%"
                height="600px"
                margin="5px auto"
              />
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
