import React from "react";
import styled from "styled-components";
import SubNav from "./SubNav";
import MainNav from "./MainNav";

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
const Logo = styled.a`
  height: 75px;
`;

export default function Navbar() {
  return (
    <Header>
      <Inner>
        <TopNav>
          <Logo>
            <img src="./images/OneMind_logo.png" alt="OneMind" />
          </Logo>
          <SubNav></SubNav>
        </TopNav>
        <MainNav></MainNav>
      </Inner>
    </Header>
  );
}
