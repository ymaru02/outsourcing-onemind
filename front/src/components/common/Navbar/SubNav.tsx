import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { style } from "@mui/system";

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

const ATag = styled.a`
  &:hover {
    cursor: pointer;
  }
`;
export default function SubNav() {
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(window.sessionStorage.getItem("userName"));
    setToken(window.sessionStorage.getItem("token"));
  }, [token, userName]);

  const handleLogout = () => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("userName");
    setToken("");
    setUserName("");
  };
  return (
    <SubMenu>
      <Menu>
        {token ? (
          <>
            <MenuList>
              <MenuName> {userName}</MenuName>
            </MenuList>
            <MenuList>
              <MenuName>
                <ATag onClick={handleLogout}>Logout</ATag>
              </MenuName>
            </MenuList>
          </>
        ) : (
          <MenuList>
            <Link to={`login`}>
              <MenuName> LogIn</MenuName>
            </Link>
          </MenuList>
        )}
      </Menu>
    </SubMenu>
  );
}
