import React from "react";
import styled from "styled-components";
import Circle from "../Home/Circle/Circle";
import img1 from "../../img/quick_icon01.png";
import img2 from "../../img/quick_icon02.png";
import img3 from "../../img/quick_icon03.png";
import img4 from "../../img/quick_icon04.png";
import main from "../../img/main.png";
const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
`;
const MainImg = styled.img`
  max-width: 100%;
  max-height: 500px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 40px;

  @media ${(props) => props.theme.desktop} {
    margin-top: -30px;
  }
  @media ${(props) => props.theme.mobile} {
  }
`;
const Nav = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
  margin-top: 0;

  @media ${(props) => props.theme.desktop} {
    margin-top: -10px;
  }
`;
const Temp = styled.div`
  display: block;
  height: 20px;

  @media ${(props) => props.theme.desktop} {
    height: 120px;
  }
`;

export default function Home() {
  return (
    <>
      <Temp></Temp>
      <MainImg src={main} />
      <Nav>
        <Circle image={img1} content={"예배시간"} link={"/worship"}></Circle>
        <Circle image={img3} content={"설교말씀"} link={"/sermon"}></Circle>
        <Circle image={img2} content={"교회소식"} link={"/news"}></Circle>
        <Circle image={img4} content={"오시는길"} link={"/location"}></Circle>
      </Nav>
      <Video controls={false} controlsList="nodownload" autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
      </Video>
    </>
  );
}
