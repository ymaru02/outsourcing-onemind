import React from "react";
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
import Rainbow250 from "../../assets/images/rainbowVer250.png";
import Notice from "../Notice/Notice";

export default function News() {
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
        <Sidebar title="교회 소식" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">교회 소식</InfoTitleDiv>
          <Notice></Notice>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
