import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: white;
  text-decoration: none;DW
`;

interface Imgprops {
  image: string;
  content: string;
  link: string;
}

export default function Circle({ image, content, link }: Imgprops) {
  return (
    <Menu>
      <Link to={link}>
        <Content>
          <img src={image} alt="" />
          <span>{content}</span>
        </Content>
      </Link>
    </Menu>
  );
}
