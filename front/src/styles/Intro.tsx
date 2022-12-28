import styled from "styled-components";
import { theme } from "./Theme";
import GreetingBook from "../img/GreetingBook.png";

const Flex = styled.div`
  display: flex;
`;
// Introduction & Location 공통
export const Wrap = styled(Flex)`
  width: 100%;
  padding: 0 0 25px 0;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const ImgBox = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.22);
`;
export const Img = styled.img<{ width: any; height: any; margin: any }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  object-fit: cover;
`;
export const FloatImg = styled.img<{ float: any }>`
  width: 40%;
  height: 50%;
  float: ${(props) => props.float};
  border-radius: 3px;
  margin: 20px 0 5px 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.22);

  @media ${(props) => props.theme.desktop} {
    width: 30%;
    height: 40%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 150px;
    height: 210px;
    margin: auto;
  }
`;
export const DivideBox = styled(Flex)`
  width: 100%;
  max-width: 1280px;
  flex-flow: row wrap;
  gap: 25px;
`;
export const SidebarBox = styled(Flex)`
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  height: 890px;
  flex-flow: column wrap;
  gap: 30px;
  flex: 2;
  padding: 16px 0 30px 30px;

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;
export const Ul = styled.ul`
  display: flex;
  flex-flow: column wrap;
  padding: 5px;
  gap: 30px;
  padding-left: 10px;
`;
export const Li = styled.li`
  list-style: none;
`;

export const ContentsBox = styled(Flex)`
  flex-flow: column wrap;
  gap: 30px;
  flex: 8;
  padding: 20px 0 0 0;
  margin: 0 5px 0 5px;
`;
export const ContentsDiv = styled.div`
  width: 100%;
  @media ${(props) => props.theme.desktop} {
    width: 90%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const InfoDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
  }
`;
export const TinyTitle = styled.p<{ fontsize: any }>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  text-align: center;
`;
export const TinyTitles = styled.p<{ fontsize: any }>`
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  text-align: start;
  margin-left: 60px;
`;
export const Strong = styled.strong`
  font-color: ${theme.mainColor};
`;
export const IntroP1 = styled.div`
  font-size: 1.7vh;
  width: 70%;
  padding: 0 30px 0 12px;
  margin: 0 0 50px 30px;

  @media ${(props) => props.theme.desktop} {
    font-size: 1.5vw;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 0.5vh;
  }
`;
export const IntroP2 = styled.p`
  padding: 0 0 0 70px;
  margin-bottom: 50px;
  @media ${(props) => props.theme.mobile} {
    padding: 10px;
    margin-bottom: 20px;
  }
`;
// Intro
export const MainIntroBox = styled.div`
  position: relative;
`;
export const MainIntroStart = styled.div`
  top: 0;
  position: absolute;
  padding: 0 30px 0 20px;
`;
export const InfoTitleDiv = styled(InfoDiv)<{ fontsize: any }>`
  height: 40px;
  text-align: left;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  border-bottom: 1px solid lightgrey;
`;
export const IntroFirstTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  gap: 90px;
`;
export const IntroTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 10px;
  position: relative;
`;
export const IntroImg = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  margin: 10px 0 20px 0;
`;
export const IntroFirstTitle = styled.div<{ fontsize: any }>`
  display: flex;
  align-items: center;
  flex: 8;
  height: 45px;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  text-align: start;
  margin: 30px 0 30px 120px;
  padding-left: 5px;
  border-radius: 5px;

  @media ${(props) => props.theme.desktop} {
    margin: 50px 0 35px 120px;
    font-size: 40px;
  }
  @media ${(props) => props.theme.mobile} {
    margin: 45px 0 0 0;
    font-size: 40px;
  }
`;
export const IntroTitle = styled.div<{ fontsize: any }>`
  display: flex;
  align-items: center;
  flex: 8;
  height: 45px;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  text-align: start;
  margin: 10px 0 20px 0;
  padding-left: 5px;
  border: 2px solid ${theme.mainColor};
  border-radius: 5px;
`;
export const GreetingP1 = styled.div<{ fontsize: any }>`
  color: ${theme.mainColor};
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  width: 100%;

  @media ${(props) => props.theme.mobile} {
    width: 80%;
    margin-top: 10px;
  }
`;
export const GreetingP2 = styled.div<{ fontsize: any }>`
  width: 100%;
  font-size: ${(props) => props.fontsize};

  @media ${(props) => props.theme.desktop} {
    width: 80%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;
export const GreetingBox = styled.div`
  top: 0;
  left: 0;
  padding: 90px 120px 90px 130px;
  background-image: url(${GreetingBook});
  background-repeat: no-repeat;
  background-size: 91% 100%;
  background-position: center;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-flow: column wrap;
    padding: 80px 85px 110px 85px;
  }
`;
export const IntroNum = styled.div`
  top: 12px;
  left: 15px;
  font-size: 32px;
  font-weight: bold;
  position: absolute;
`;
// Location 적용
export const MapBox = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid ${theme.mainColor};
`;
// Sidebar 적용
export const H2 = styled.h2`
  height: 45px;
  border-bottom: 1px solid lightgrey;
  text-align: center;
`;
export const Lihover = styled(Li)`
  width: 100%;
  height: 32px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid ${theme.mainColor};
  border-radius: 8px;
  text-align: center;
  padding: 10px 0 6px 0;
  &:hover {
    font-size: 18px;
    background-color: ${theme.mainColor};
    color: ${theme.subColor};
  }
`;
// Worship 적용
export const WorshipItem = styled(Flex)`
  border-left: 2px solid ${theme.mainColor};
  border-right: 2px solid ${theme.mainColor};
  border-radius: 20px;
  width: 100%;
  height: 300px;
  margin: 20px 0 0 0;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`;
export const WorshipInnerItem = styled(Flex)`
  width: 33%;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media ${(props) => props.theme.mobile} {
    width: 50%;
  }
`;
export const P = styled.p`
  // border-bottom: 1px double ${theme.mainColor};
  border-bottom: 2px double lightgrey;
`;
// Pastor 적용
export const PastorDiv = styled(Flex)`
  width: 100%;
  justify-content: start;
  align-items: start;
  flex-flow: row wrap;
  margin-bottom: 50px;
  gap: 20px;
`;
export const PastorItem = styled(Flex)`
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  gap: 5px;
`;
// Contribution 적용
export const ContributionItem = styled(Flex)`
  border-left: 2px solid ${theme.mainColor};
  border-right: 2px solid ${theme.mainColor};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  margin: 20px 0 0 0;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;

  @media ${(props) => props.theme.mobile} {
    flex-flow: column wrap;
    gap: 50px;
  }
`;
export const ContributionInnerItem = styled(Flex)`
  width: 45%;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
// Greeting
export const GreetingAbsolute = styled.div`
  position: absolute;
`;
