import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox,
  Img,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  InfoTitleDiv,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../assets/images/rainbowVer250.png";
import UpdatePost from "./UpdatePost";

export default function PostUpdataDefault() {
  useEffect(() => {
    AOS.init();
  }, []);

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
        <Sidebar title="설교 말씀" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">설교 말씀</InfoTitleDiv>
          <ContentsDiv data-aos="fade-left" data-aos-duration="800">
            <InfoDiv>
              <UpdatePost></UpdatePost>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
