import React, { useEffect, useRef } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
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
import styled from "styled-components";

const ContainerTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const DivTag = styled.div`
  display: flex;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;
`;
const DeleteTag = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 0.3ch solid red;
  padding: 10px;
  color: red;
  cursor: pointer;
`;

export default function ShowSermon() {
  const { id } = useParams();
  const content: any = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    axios({
      url: "http://localhost:8080/you-tube/tag",
      method: "get",
      params: { id: id },
      withCredentials: true,
    }).then((result: any) => {
      console.log(result.data);
      content.current.innerHTML = result.data.tag;
    });
  }, []);

  const handleDelete = () => {
    const params = {
      id: id,
    };
    axios.delete(`http://localhost:8080/you-tube/delete`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      },
      params,
    });
    navigate("/sermon");
  };
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
              <DivTag>
                <DeleteTag onClick={handleDelete}>삭제</DeleteTag>
              </DivTag>
              <ContainerTag ref={content}></ContainerTag>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
