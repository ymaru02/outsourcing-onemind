import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css"; // AOS import
import LocationMap from "./LocationMap";
import {
  Wrap,
  TestImgBox,
  DivideBox,
  SidebarBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  MapBox,
} from "../styles/Location";

export default function Location() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <TestImgBox></TestImgBox>
      <DivideBox>
        <SidebarBox>
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
        </SidebarBox>
        <ContentsBox>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <ul>
                <li>📬 대구광역시 수성구 범안로8길 19(범물동) </li>
                <li>📞 010-6228-8433</li>
                <li>+ 그 외 추가 연락처</li>
              </ul>
            </InfoDiv>
          </ContentsDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <MapBox id="map">
              <LocationMap />
            </MapBox>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
