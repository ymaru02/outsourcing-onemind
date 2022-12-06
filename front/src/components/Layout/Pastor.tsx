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

export default function Worship() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <ImgBox>
        <Img
          src={Rainbow250}
          alt=""
          width="100%"
          height="100%"
          margin="0 0 -5px 0"
        />
      </ImgBox>
      <DivideBox>
        <Sidebar title="목사 소개" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">목사 소개</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <div>
                <TinyTitle fontsize="18px">담임 목사</TinyTitle>
                {/* 서정현 010-5739-0916 */}
              </div>
              <TinyTitle fontsize="18px">협동 목사</TinyTitle>
              {/* 김병철 010-2688-1759 */}
              <TinyTitle fontsize="18px">교육 목사</TinyTitle>
              {/* 김갑수 010-8595-4952 */}
              <TinyTitle fontsize="18px">사역 목사</TinyTitle>
              {/* 임인환 010-8565-0681 */}
              <TinyTitle fontsize="18px">장로</TinyTitle>
              {/* 최성철 010-4160-9898 */}
              {/* 이강환 010-9290-4040 */}
              <TinyTitle fontsize="18px">전도사</TinyTitle>
              {/* 정옥숙 010-5556-7651 */}
              <TinyTitle fontsize="18px">영아부</TinyTitle>
              {/* 손상희 010-2629-1757 */}
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
