import React, { useEffect, useState } from "react";
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

export default function MakeSermon() {
  const [link, SetLink] = useState("");
  const senddata = async () =>{
    const data = {
        title:"코황",
        tag:link,
    }
    const result = await axios({
        url: "http://localhost:8080/you-tube/upload",
        method: "post",
        data: data,
        withCredentials: true,
      });
      console.log(result)
  }
  useEffect(() => {
    AOS.init();
  });
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
              <div>
                <input
                  onChange={(e) => {
                    SetLink(e.target.value);
                  }}
                  type="text"
                />
                <button onClick={senddata}>제출</button>
              </div>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
