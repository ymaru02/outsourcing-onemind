import React, { useEffect, useRef, useState } from "react";
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
import YouTube from "./Youtube";
import axios from "axios";
import styled from "styled-components";

const TextTag = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TitleInput = styled.input`
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  color: #999999;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
`;
const ButtonTag = styled.button`
  width: 120px;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  transition: all 0.2s;
  border-color: skyblue;
  background-color: white;
  margin-top: 10px;
`;
export default function MakeSermon() {
  const [link, SetLink] = useState("");

  const title = useRef(null);

  const senddata = async () => {
    const data = {
      title: title.current.value,
      tag: link,
    };
    const result = await axios({
      url: "http://localhost:8080/you-tube/upload",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      },
      method: "post",
      data: data,
      withCredentials: true,
    });
  };
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
              <TextTag>제목</TextTag>
              <TitleInput ref={title} type="text" />
              <TextTag>유튜브 링크</TextTag>
              <TitleInput
                onChange={(e) => {
                  SetLink(e.target.value);
                }}
                type="text"
              />
              <ButtonTag onClick={senddata}>제출</ButtonTag>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
