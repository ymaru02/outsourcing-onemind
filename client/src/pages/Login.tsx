import React, { useState, useEffect } from "react";
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
import Rainbow250 from "../../assets/images/rainbowVer250.png";
import styled from "styled-components";
import axios from "axios";
import signLogo from "../../assets/images/sign.png";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 50vh;
`;

const ImgTag = styled.img``;
const FlexTag = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  height: 30px;
`;

const InputTag = styled.input`
  width: 50%;
  font-size: 15px;
  border: 0;
  background-color: rgb(233, 233, 233);
  padding-left: 10px;
  border-radius: 5px;
  border-color: skyblue;
`;

const SpanTag = styled.span`
  width: 35%;
  text-align: center;
`;

const ButtonTag = styled.button`
  width: 120px;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  transition: all 0.2s;
  border-color: skyblue;
  background-color: white;
`;

export default function Login() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");

  const navigate = useNavigate();

  const handleLogIn = () => {
    axios
      .post("http://localhost:8080/auth/login", {
        email: ID,
        password: PW,
      })
      .then((res) => {
        window.sessionStorage.setItem("userName", res.data.name);
        window.sessionStorage.setItem("token", res.data.token);
        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("이메일 형식이 아닌것 같습니다");
        }else if(error.response.status === 401){
          alert("아이디 비밀번호를 확인하세요");
        }
      });
  };
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
        <Sidebar title="교회 로그인" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">교회 로그인</InfoTitleDiv>
          <Container>
            <ImgTag src={signLogo}></ImgTag>
            <FlexTag>
              <SpanTag>ID : </SpanTag>
              <InputTag
                defaultValue={ID}
                onChange={(e) => setID(e.target.value)}
              ></InputTag>
            </FlexTag>
            <FlexTag>
              <SpanTag>PassWord : </SpanTag>
              <InputTag
                type={"password"}
                defaultValue={PW}
                onChange={(e) => setPW(e.target.value)}
              ></InputTag>
            </FlexTag>
            <FlexTag>
              <ButtonTag onClick={handleLogIn}>로그인</ButtonTag>
            </FlexTag>
          </Container>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
