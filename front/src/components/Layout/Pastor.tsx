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
  PastorItem,
  TinyTitles,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import pastor from "../../img/pastor.jpg";

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
                  <PastorItem>
                    <img src={pastor} alt="" width="100%" height="100%" />
                    <p>서정현</p>
                    <p>010-5739-0916</p>
                  </PastorItem>
                </div>
              </PastorDiv>
              <PastorDiv>
                <div>
                  <TinyTitle fontsize="22px">협동 목사</TinyTitle>
                  <PastorItem>
                    <img src={pastor} alt="" width="100%" height="100%" />
                    <p>김병철</p>
                    <p>010-2688-1759</p>
                  </PastorItem>
                </div>
                <div>
                  <TinyTitle fontsize="22px">교육 목사</TinyTitle>
                  <PastorItem>
                    <img src={pastor} alt="" width="100%" height="100%" />
                    <p>김갑수</p>
                    <p>010-8595-4952</p>
                  </PastorItem>
                </div>
                <div>
                  <TinyTitle fontsize="22px">사역 목사</TinyTitle>
                  <PastorItem>
                    <img src={pastor} alt="" width="100%" height="100%" />
                    <p>임인환</p>
                    <p>010-8565-0681</p>
                  </PastorItem>
                </div>
              </PastorDiv>
              <TinyTitles fontsize="22px">시무 장로</TinyTitles>
              <PastorDiv>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>최성철</p>
                  <p>010-4160-9898</p>
                </PastorItem>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>이강환</p>
                  <p>010-9290-4040</p>
                </PastorItem>
              </PastorDiv>
              <PastorDiv>
                <div>
                  <TinyTitle fontsize="22px">전도사</TinyTitle>
                  <PastorItem>
                    <img src={pastor} alt="" width="100%" height="100%" />
                    <p>정옥숙</p>
                    <p>010-5556-7651</p>
                  </PastorItem>
                </div>
                <div>
                  <TinyTitle fontsize="22px">영아부</TinyTitle>
                  <PastorItem>
                    <img src={pastor} alt="" width="100%" height="100%" />
                    <p>손상희</p>
                    <p>010-2629-1757</p>
                  </PastorItem>
                </div>
              </PastorDiv>
              <TinyTitles fontsize="22px">시무 권사</TinyTitles>
              <PastorDiv>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>장영례</p>
                </PastorItem>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>장지양</p>
                </PastorItem>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>최경희</p>
                </PastorItem>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>한순남</p>
                </PastorItem>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>안현숙</p>
                </PastorItem>
                <PastorItem>
                  <img src={pastor} alt="" width="100%" height="100%" />
                  <p>성순정</p>
                </PastorItem>
              </PastorDiv>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
