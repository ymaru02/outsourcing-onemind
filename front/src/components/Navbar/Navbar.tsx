import React from "react";
import styled from "styled-components";
import SubNav from "./SubNav";
import MainNav from "./MainNav";
import Logo1 from "../../img/logo.png";
import { Link } from "react-router-dom";

const Header = styled.div`
  width: 100%;
  border-bottom: 1px solid #c8c8c8;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
`;

const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoImg = styled.img``;

export default function Navbar() {
  return (
    <Header>
      <Inner>
        <TopNav>
          <StyledLink to={"/"}>
            <LogoImg src={Logo1} alt="OneMind" />
          </StyledLink>
          <SubNav></SubNav>
        </TopNav>
        <MainNav></MainNav>
      </Inner>
    </Header>
  );
}
