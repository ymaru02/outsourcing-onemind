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
  WorshipItem,
  WorshipInnerItem,
  P,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";

interface worship {
  title: string;
  time: string;
}

export default function Worship() {
  useEffect(() => {
    AOS.init();
  });
  const worshipItem: worship[] = [
    { title: "주일 오전 예배", time: "오전 11:00" },
    { title: "주일 오후 예배", time: "오후 14:00" },
    { title: "주일 학교 예배", time: "오전 9:30" },
    { title: "수요 예배", time: "수요일 오후 7:30" },
    { title: "중고등부 예배", time: "오후 13:00" },
    { title: "영아부 예배", time: "오전 11:00" },
    { title: "새벽 기도회", time: "오전 5:00" },
  ];
  return (
    <Wrap>
      <div style={{ height: "80px" }}></div>
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
        <Sidebar title="예배 시간" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">예배 시간</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <WorshipItem>
                {worshipItem.map((worship, index) => {
                  return (
                    <WorshipInnerItem key={index}>
                      <h2>{worship.title}</h2>
                      <P>{worship.time}</P>
                    </WorshipInnerItem>
                  );
                })}
              </WorshipItem>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
