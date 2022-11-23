import styled from "styled-components";
import TestImg from "../img/testImg.jpg";

const Flex = styled.div`
  display: flex;
`;
export const H2 = styled.h2`
  height: 45px;
  border-bottom: 1px solid grey;
`;
// Introduction & Location 공통
export const Wrap = styled(Flex)`
  width: 100%;
  margin-top: 100px;
  padding: 0 0 25px 0;
  border: 1px solid red;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
export const TestImgBox = styled.div`
  max-width: 1280px;
  background: url(${TestImg});
  width: 100%;
  height: 250px;
`;
export const DivideBox = styled(Flex)`
  max-width: 1280px;
  width: 100%;
  border: 1px solid blue;
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
`;
export const ContentsBox = styled(Flex)`
  flex-flow: column wrap;
  gap: 30px;
  flex: 8;
  padding: 30px 30px 30px 0;
`;
export const ContentsDiv = styled.div`
  border: 1px solid green;
`;
export const InfoDiv = styled.div`
  text-align: left;
`;
export const InfoTitleDiv = styled(InfoDiv)<{ fontsize: any }>`
  height: 40px;
  text-align: left;
  font-size: ${(props) => props.fontsize};
  font-weight: bold;
  border-bottom: 1px solid grey;
`;
// Location 적용
export const MapBox = styled.div`
  width: 100%;
  height: 450px;
`;
