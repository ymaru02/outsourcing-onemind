import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SubMenu = styled.div``;
const Menu = styled.ul`
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
`;

const MenuList = styled.li`
  position: relative;
  list-style: none;

  &:before {
    content: "";
    width: 1px;
    height: 12px;
    background-color: #e5e5e5;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  &:first-child {
    &:before {
      display: none;
    }
  }
`;

const MenuName = styled.span`
  padding: 11px 16px;
  display: block;
  font-size: 13px;
  color: #656565;
`;
export default function SubNav() {
  return (
    <SubMenu>
      <Menu>
        <MenuList>
          <Link to={`signin`}>
            <MenuName>Sign In</MenuName>
          </Link>
        </MenuList>
        <MenuList>
          <Link to={`signin`}>
            <MenuName>Sign In</MenuName>
          </Link>
        </MenuList>
      </Menu>
    </SubMenu>
  );
}
