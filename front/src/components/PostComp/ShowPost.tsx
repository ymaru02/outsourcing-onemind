import React, { useEffect, useRef, useState } from "react";
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
import worshipImg from "../../img/worship.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ShowPost() {
  const {id}=useParams();
  const content : any=useRef();
  const [title,setTitle]=useState('');
  useEffect(() => {
    AOS.init();
    axios({
      url: "http://localhost:8080/post/takecontent",
      method: "get",
      params: {id:id},
      withCredentials: true,
    }).then((result)=>{
      console.log(result.data)
      setTitle(result.data.title)
      content.current.innerHTML=result.data.content;
    });
  });
  return (
    <Wrap>
      <ImgBox>
        <Img src={Rainbow250} alt="" width="100%" height="100%" margin="auto" />
      </ImgBox>
      <DivideBox>
        <Sidebar title="소식" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">소식</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <TinyTitle fontsize="18px">{title}</TinyTitle>
              <div ref={content}>

              </div>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
