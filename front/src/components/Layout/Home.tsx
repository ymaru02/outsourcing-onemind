import React from "react";
import styled from "styled-components";
import Circle from "../Home/Circle/Circle";
import img1 from "../../img/quick_icon01.png";
import img2 from "../../img/quick_icon02.png";
import img3 from "../../img/quick_icon03.png";
import img4 from "../../img/quick_icon04.png";

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
const Temp = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 50vh;
`;
const Nav = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
`;

export default function Home() {
  return (
    <>
    
      <Temp>Temp</Temp>
      <Nav>
        <Circle image={img1} content={"예배시간"}></Circle>
        <Circle image={img2} content={"교회소식"}></Circle>
        <Circle image={img3} content={"교회앨범"}></Circle>
        <Circle image={img4} content={"오시는길"}></Circle>
      </Nav>
      <Video controls={false} controlsList="nodownload" autoPlay loop muted>
        <source src="/background.mp4" type="video/mp4" />
      </Video>
    </>
  );
}
