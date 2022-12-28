import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { BsList, BsXLg } from "react-icons/bs";
const MainMenu = styled.ul`
  width: 700px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-flow: nowrap;
  overflow-x: auto;
  gap: 10px;
`;
const MoMainMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
  padding-top: 10px;
`;

const Item = styled.li`
  list-style: none;
`;

const ItemName = styled.div`
  font-weight: bold;
  padding: 10px;
  color: black;
  font-size: 1.5vh;
  &:hover {
    background-color: rgba(200, 200, 200, 0.5);
    color: #ffffff;
    border-radius: 6px 6px 0 0;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const MenuIcon = styled.div``;

const MoMenu = styled.li`
  flex-direction: column;
  width: 100%;
  height: 500px;
  position: absolute;
  top: 120px;
  left: -100%;
  transition: all 0.5s ease;
  background-color: rgba(200, 200, 200, 0);

  &.active {
    background-color: rgba(200, 200, 200, 0.8);
    left: 0;
    transition: all 0.5s ease;
    z-index: 1;
  }
`;
export default function MainNav() {
  const [resize, setResize] = useState(false);
  const [clicked, setClicked] = useState(false);
  //false = bars, true = times
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleResize = () => {
    if (window.innerWidth > 700) {
      setResize(true);
    } else {
      setResize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {resize ? (
        <MainMenu>
          {" "}
          <Item>
            <StyledLink to={"/introduction"}>
              <ItemName>교회소개</ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={"/pastor"}>
              <ItemName>목사소개</ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={"/sermon"}>
              <ItemName>설교말씀</ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={"/news"}>
              <ItemName>교회소식</ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={"/album"}>
              <ItemName>교회앨범</ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={"/worship"}>
              <ItemName>예배시간</ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={"/contribution"}>
              <ItemName>온라인 헌금</ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to={"/location"}>
              <ItemName>오시는길</ItemName>
            </StyledLink>
          </Item>
        </MainMenu>
      ) : (
        <MoMainMenu>
          <MenuIcon onClick={handleClick}>
            {clicked ? <BsXLg size={30} /> : <BsList size={30} />}
          </MenuIcon>
          <MoMenu className={clicked ? "active" : ""}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <StyledLink to={item.path} onClick={handleClick}>
                    <ItemName>{item.name}</ItemName>
                  </StyledLink>
                </li>
              );
            })}
          </MoMenu>
        </MoMainMenu>
      )}
    </>
  );
}
