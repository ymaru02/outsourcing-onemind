import React from "react";
import styled from "styled-components";
const Menu = styled.div`
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0.5rem solid rgba(255, 255, 255, 0.6);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2em;
`;

interface Imgprops {
  image: string;
  content: string;
}

export default function Circle({ image, content }: Imgprops) {
  return (
    <Menu>
      <Content>
        <img src={image} alt="" />
        <span>{content}</span>
      </Content>
    </Menu>
  );
}
