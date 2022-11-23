import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css"; // AOS import
import LocationMap from "./LocationMap";
import {
  Wrap,
  ImgBox250W,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  MapBox,
  Ul,
  InfoTitleDiv,
  Li,
} from "../../styles/IntroductionAndLocation";
import Sidebar from "./Sidebar";

export default function Location() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <ImgBox250W></ImgBox250W>
      <DivideBox>
        <Sidebar />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">주소 및 연락처</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <Ul>
                <Li>📬 대구광역시 수성구 범안로8길 19(범물동) </Li>
                <Li>📞 010-6228-8433</Li>
                <Li>+ 그 외 추가 사항</Li>
              </Ul>
            </InfoDiv>
          </ContentsDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <MapBox>
              <LocationMap />
            </MapBox>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
