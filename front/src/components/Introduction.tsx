import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// AOS import
import AOS from "aos";
import "aos/dist/aos.css";

export default function Introduction() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <DivideDiv>
        <SidebarDiv>
          {/* 사이드바 제작 후 분리 예정 */}
          <aside>사이드바</aside>
          <ul>
            <Link to="/introduction">
              <li>교회 소개</li>
            </Link>
            <Link to="/location">
              <li>교회 오시는 길</li>
            </Link>
          </ul>
        </SidebarDiv>
        <ContentsDiv>
          <ContentBox>
            <TitleBox>영상 및 사진</TitleBox>
          </ContentBox>
          <ContentBox data-aos="fade-right" data-aos-duration="800">
            <TitleBox>교회론</TitleBox>
          </ContentBox>
          <ContentBox data-aos="fade-left" data-aos-duration="800">
            <TitleBox>교회 연혁</TitleBox>
          </ContentBox>
        </ContentsDiv>
      </DivideDiv>
    </Wrap>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  padding: 25px 0 25px 0;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DivideDiv = styled.div`
  max-width: 1280px;
  width: 100%;
  border: 1px solid blue;
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
`;
const SidebarDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 50px;
  flex: 2;
`;
const ContentsDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 50px;
  flex: 8;
`;
const ContentBox = styled.div`
  border: 1px solid green;
`;
const TitleBox = styled.div`
  text-align: center;
`;
