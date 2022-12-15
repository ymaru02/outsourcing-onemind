import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import SubNav from "./SubNav";
import MainNav from "./MainNav";
import Logo1 from "../../img/logo.png";
import { Link } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
  transition: transform 0.5s;
  position: fixed;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoImg = styled.img``;

export default function Navbar() {
  const Top = useRef(null);

  window.addEventListener("mousewheel", (e: any) => {
    const direction = e.deltaY > 0 ? true : false;

    if (Top && direction) {
      Top.current?.classList?.add("down");
    } else {
      Top.current?.classList?.remove("down");
    }
  });

  return (
    <Header ref={Top}>
      <Inner>
        <TopNav>
          <StyledLink to={"/"}>
            <LogoImg src={Logo1} alt="OneMind" />
          </StyledLink>
          <SubNav></SubNav>
        </TopNav>
      </Inner>
      <MainNav></MainNav>
    </Header>
  );
}
