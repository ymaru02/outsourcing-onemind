import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css"; // AOS import
import LocationMap from "./LocationMap";
import {
  Wrap,
  TestImgBox,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  MapBox,
  Ul,
  InfoTitleDiv,
} from "../../styles/IntroductionAndLocation";
import Sidebar from "./Sidebar";

export default function Location() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <TestImgBox></TestImgBox>
      <DivideBox>
        <Sidebar />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">주소 및 연락처</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <Ul>
                <li>📬 대구광역시 수성구 범안로8길 19(범물동) </li>
                <li>📞 010-6228-8433</li>
                <li>+ 그 외 추가 사항</li>
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
