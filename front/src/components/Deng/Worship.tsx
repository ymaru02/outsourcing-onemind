import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox250R,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  InfoTitleDiv,
} from "../../styles/Intro";
import Sidebar from "./Sidebar";

export default function Worship() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <ImgBox250R></ImgBox250R>
      <DivideBox>
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
