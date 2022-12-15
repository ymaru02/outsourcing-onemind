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
  PastorDiv,
  TinyTitles,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import pastor from "../../img/pastor.jpg";
import PasterItem from "../Pastor/PasterItem";

export default function Pastor() {
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
              <PastorDiv>
                <div>
                  <TinyTitle fontsize="22px">담임 목사</TinyTitle>
                  <PasterItem name="서정현" phone="010-5739-0916" />
                </div>
              </PastorDiv>
              <PastorDiv>
                <div>
                  <TinyTitle fontsize="22px">협동 목사</TinyTitle>
                  <PasterItem name="김병철" phone="010-2688-1759" />
                </div>
                <div>
                  <TinyTitle fontsize="22px">교육 목사</TinyTitle>
                  <PasterItem name="김갑수" phone="010-8595-4952" />
                </div>
                <div>
                  <TinyTitle fontsize="22px">사역 목사</TinyTitle>

                  <PasterItem name="임인환" phone="010-8565-0681" />
                </div>
              </PastorDiv>
              <TinyTitles fontsize="22px">시무 장로</TinyTitles>
              <PastorDiv>
                <PasterItem name="최성철" phone="010-4160-9898" />
                <PasterItem name="이강환" phone="010-9290-4040" />
              </PastorDiv>
              <PastorDiv>
                <div>
                  <TinyTitle fontsize="22px">전도사</TinyTitle>

                  <PasterItem name="정옥숙" phone="010-5556-7651" />
                </div>
                <div>
                  <TinyTitle fontsize="22px">영아부</TinyTitle>

                  <PasterItem name="손상희" phone="010-2629-1757" />
                </div>
              </PastorDiv>
              <TinyTitles fontsize="22px">시무 권사</TinyTitles>
              <PastorDiv>
                <PasterItem name="장영례" />
                <PasterItem name="장지양" />
                <PasterItem name="최경희" />
                <PasterItem name="한순남" />
                <PasterItem name="안현숙" />
                <PasterItem name="성순정" />
              </PastorDiv>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
