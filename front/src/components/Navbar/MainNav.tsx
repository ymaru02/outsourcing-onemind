import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { BsList, BsXLg } from "react-icons/bs";
const MainMenu = styled.ul`
  width: 900px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-flow: nowrap;
  overflow-x: auto;
  gap: 10px;
`;
const MoMainMenu = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 10px;
  padding-top: 10px;
`;

const Item = styled.li`
  list-style: none;
`;

const ItemName = styled.div`
  white-space: nowrap;
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
const MoItemName = styled.div`
  white-space: nowrap;
  font-weight: bold;
  padding: 15px;
  color: black;
  font-size: 2vh;
  &:hover {
    background-color: rgba(150, 150, 150, 0.5);
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
  height: 100vh;
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
    if (window.innerWidth > 900) {
      setResize(true);
    } else {
      setResize(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {resize ? (
        <MainMenu>
          {MenuItems.map((item, index) => {
            return (
              <Item>
                <StyledLink to={item.path}>
                  <ItemName>{item.name}</ItemName>
                </StyledLink>
              </Item>
            );
          })}
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
                    <MoItemName>{item.name}</MoItemName>
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
