import React, { useEffect } from "react";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css"; // AOS import
import LocationMap from "../Maps/LocationMap";
import {
  Wrap,
  ImgBox,
  DivideBox,
  ContentsBox,
  ContentsDiv,
  InfoDiv,
  MapBox,
  Ul,
  InfoTitleDiv,
  Li,
  Img,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Warm250 from "../../assets/images/warmVer250.png";

export default function Location() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <Wrap>
      <div style={{ height: "80px" }}></div>
      <ImgBox>
        <Img
          src={Warm250}
          alt=""
          width="100%"
          height="100%"
          margin="0 0 -5px 0"
        />
      </ImgBox>
      <DivideBox>
        <Sidebar title="교회 오시는 길" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">주소 및 연락처</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <Ul>
                <Li>📬 대구광역시 수성구 범안로8길 19(범물동) </Li>
                <Li>📞 053-784-0916</Li>
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
