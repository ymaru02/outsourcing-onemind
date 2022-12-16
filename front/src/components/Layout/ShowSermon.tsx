import React, { useEffect, useRef } from "react";
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
import Rainbow250 from "../../img/rainbowVer250.png";
import YouTube from "./youtube";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ShowSermon() {
  const { id } = useParams();
  const content: any = useRef();
  useEffect(() => {
    AOS.init();
    axios({
      url: "http://localhost:8080/you-tube/tag",
      method: "get",
      params: { id: id },
      withCredentials: true,
    }).then((result:any) => {
      console.log(result.data);
      content.current.innerHTML = result.data.tag;
    });
  },[]);

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
              <div ref={content}></div>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
