import React, { useEffect } from "react";
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
  P,
  ContributionInnerItem,
  ContributionItem,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";

interface contribution {
  title: string;
  desc: string;
  bank: string;
  account: string;
}

export default function Contribution() {
  useEffect(() => {
    AOS.init();
  });
  const contributionItem: contribution[] = [
    {
      title: "온라인 계좌 1",
      desc: "십일조, 감사, 건축헌금은 아래의 계좌로 송금해주세요.",
      bank: "새마을 금고 추수하는교회",
      account: "9002-1772-8031-6",
    },
    {
      title: "온라인 계좌 2",
      desc: "선교헌금은 아래의 계좌로 송금해주세요.",
      bank: "대구은행 추수하는교회",
      account: "504-10-136431-6",
    },
  ];
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
        <Sidebar title="온라인 헌금" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">온라인 헌금</InfoTitleDiv>
          <ContentsDiv data-aos="fade-up" data-aos-duration="800">
            <InfoDiv>
              <ContributionItem>
                {contributionItem.map((worship, index) => {
                  return (
                    <ContributionInnerItem key={index}>
                      <h2>{worship.title}</h2>
                      <p>{worship.desc}</p>
                      <P>{worship.bank} </P>
                      <P>
                        <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                          {worship.account}
                        </span>
                      </P>
                    </ContributionInnerItem>
                  );
                })}
              </ContributionItem>
            </InfoDiv>
          </ContentsDiv>
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
