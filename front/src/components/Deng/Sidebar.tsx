import React from "react";
import { Link } from "react-router-dom";
import {
  H2,
  Lihover,
  SidebarBox,
  Ul,
} from "../../styles/IntroductionAndLocation";

interface SideItem {
  name: string;
  path: string;
}

function Sidebar() {
  // const pathName = useLocation().pathname; // url path 값을 받아옴
  const intro_menus: SideItem[] = [
    { name: "교회 소개", path: "/introduction" },
    { name: "교회 오시는 길", path: "/location" },
  ];
  return (
    <SidebarBox>
      {/* 사이드바 제작 후 분리 예정 */}
      <H2>교회 소개</H2>
      <Ul>
        {intro_menus.map((menu, index) => {
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
        })}
      </Ul>
    </SidebarBox>
  );
}

export default Sidebar;
