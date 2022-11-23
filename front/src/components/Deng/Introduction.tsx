import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  TestImgBox,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
} from "../../styles/IntroductionAndLocation";
import Sidebar from "./Sidebar";

export default function Introduction() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <TestImgBox></TestImgBox>
      <DivideBox>
        <Sidebar />
        <ContentsBox>
          <h3>교회 소개</h3>
          <hr />
          <ContentsDiv>
            <InfoDiv>영상 및 사진</InfoDiv>
          </ContentsDiv>
          <ContentsDiv data-aos="fade-right" data-aos-duration="800">
            <InfoDiv>교회론</InfoDiv>
          </ContentsDiv>
          <ContentsDiv data-aos="fade-left" data-aos-duration="800">
            <InfoDiv>교회 연혁</InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
