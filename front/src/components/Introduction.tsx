import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  TestImgBox,
  DivideBox,
  SidebarBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
} from "../styles/IntroductionAndLocation";

export default function Introduction() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <TestImgBox></TestImgBox>
      <DivideBox>
        <SidebarBox>
          {/* 사이드바 제작 후 분리 예정 */}
          <aside>사이드바</aside>
          <ul>
            <Link to="/introduction">
              <li>교회 소개</li>
            </Link>
            <Link to="/location">
              <li>교회 오시는 길</li>
            </Link>
          </ul>
        </SidebarBox>
        <ContentsBox>
          <h2>교회 소개</h2>
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
