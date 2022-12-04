import React from "react";
import { Link, useLocation } from "react-router-dom";
import { H2, Lihover, SidebarBox, Ul } from "../../styles/Intro";
import NotFound from "../NotFound";

interface SideItem {
  name: string;
  path: string;
}

function Sidebar() {
  const pathName = useLocation().pathname; // url path 값을 받아옴
  // console.log(pathName);
  const intro_menus: SideItem[] = [
    { name: "교회 소개", path: "/introduction" },
    { name: "교회 소식", path: "/news" },
    { name: "교회 앨범", path: "/album" },
    { name: "교회 오시는 길", path: "/location" },
    { name: "예배 시간", path: "/worship" },
  ];
  return (
    <SidebarBox>
      <H2>교회 소개</H2>
      <Ul>
        {pathName === "/introduction" ||
        "/news" ||
        "/album" ||
        "/location" ||
        "/worship" ? (
          intro_menus.map((menu, index) => {
            return (
              <Link
                to={menu.path}
                key={index}
                style={{
                  textDecoration: "none",
                }}
              >
                <Lihover>{menu.name}</Lihover>
              </Link>
            );
          })
        ) : (
          <NotFound />
        )}
      </Ul>
    </SidebarBox>
  );
}

export default Sidebar;
