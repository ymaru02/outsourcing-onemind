import styled from "styled-components";
import Rainbow250 from "../img/rainbowVer250.png";
import Warm250 from "../img/warmVer250.png";

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
`;
export const ImgBox250R = styled.div`
  max-width: 1280px;
  background: url(${Rainbow250});
  width: 100%;
  height: 250px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;
export const ImgBox250W = styled.div`
  max-width: 1280px;
  background: url(${Warm250});
  width: 100%;
  height: 250px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;
export const DivideBox = styled(Flex)`
  max-width: 1280px;
  width: 100%;
  flex-flow: row wrap;
  gap: 50px;
`;
export const SidebarBox = styled(Flex)`
  flex-flow: column wrap;
  gap: 30px;
  flex: 2;
  padding: 30px 0 30px 30px;
  position: relative;
  bottom: 6px;
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
export const Lihover = styled(Li)`
  height: 32px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid skyblue;
  border-radius: 50px;
  text-align: center;
  padding-top: 12px;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;
export const ContentsBox = styled(Flex)`
  flex-flow: column wrap;
  gap: 30px;
  flex: 8;
  padding: 30px 30px 30px;
`;
export const ContentsDiv = styled.div``;
export const InfoDiv = styled.div`
  text-align: left;
  padding-left: 20px;
`;
export const InfoTitleDiv = styled(InfoDiv)<{ fontsize: any }>`
  height: 40px;
  text-align: left;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  border-bottom: 1px solid lightgrey;
`;
// Location 적용
export const MapBox = styled.div`
  width: 100%;
  height: 450px;
  border: 1px solid skyblue;
`;
// Sidebar
export const H2 = styled.h2`
  height: 45px;
  border-bottom: 1px solid lightgrey;
`;
