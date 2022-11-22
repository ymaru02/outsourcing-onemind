import styled from "styled-components";
import TestImg from "../img/testImg.jpg";

// Introduction & Location 공통
export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  padding: 0 0 25px 0;
  border: 1px solid red;
  display: flex;
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
export const DivideBox = styled.div`
  max-width: 1280px;
  width: 100%;
  border: 1px solid blue;
  display: flex;
  flex-flow: row wrap;
  gap: 50px;
`;
export const SidebarBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 50px;
  flex: 2;
  padding: 16px 0 16px 16px;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
  flex: 8;
  padding: 16px 16px 16px 0;
`;
export const ContentsDiv = styled.div`
  border: 1px solid green;
`;
export const InfoDiv = styled.div`
  text-align: left;
`;

// Location 적용
export const MapBox = styled.div`
  width: 100%;
  height: 450px;
`;
