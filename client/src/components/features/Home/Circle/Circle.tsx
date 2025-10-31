import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = styled.div`
  width: 17vh;
  height: 17vh;
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
  font-size: 1.8em;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface Imgprops {
  image: string;
  content: string;
  link: string;
}

export default function Circle({ image, content, link }: Imgprops) {
  return (
    <Menu>
      <StyledLink to={link}>
        <Content>
          <img src={image} alt="" />
          <span>{content}</span>
        </Content>
      </StyledLink>
    </Menu>
  );
}
