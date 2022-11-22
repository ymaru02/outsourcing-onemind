import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// AOS import
import AOS from "aos";
import "aos/dist/aos.css";

export default function Location() {
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
          <ContentsBox data-aos="fade-up" data-aos-duration="800">
            <TitleBox>
              <ul>
                <li>
                  {" "}
                  📬 서울특별시 서대문구 독립문공원길 17(현저동,
                  독립문극동아파트){" "}
                </li>
                <li>📞 010-6228-8433</li>
                <li>+ 그 외 추가 연락처</li>
              </ul>
            </TitleBox>
          </ContentsBox>
          <ContentsBox data-aos="fade-up" data-aos-duration="800">
            <TitleBox>지도</TitleBox>
          </ContentsBox>
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
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
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
const ContentsBox = styled.div`
  border: 1px solid green;
`;
const TitleBox = styled.div`
  text-align: center;
`;
