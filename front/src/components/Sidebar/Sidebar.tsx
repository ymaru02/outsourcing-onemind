import React from "react";
import { Link, useLocation } from "react-router-dom";
import { H2, Lihover, SidebarBox, Ul } from "../../styles/Intro";
import NotFound from "../Layout/NotFound";

interface prop {
  title: string;
}
interface SideItem {
  name: string;
  path: string;
  id: string;
}
interface E {
  target: any;
}

function Sidebar(prop: prop) {
  const pathName = useLocation().pathname; // url path 값을 받아옴
  const intro_menus: SideItem[] = [
    { name: "인사말", path: "/greeting", id: "greeting" },
    { name: "교회 소개", path: "/introduction", id: "introduction" },
    { name: "목사 소개", path: "/pastor", id: "pastor" },
    { name: "설교 말씀", path: "/sermon", id: "sermon" },
    { name: "교회 소식", path: "/news", id: "news" },
    { name: "교회 앨범", path: "/album", id: "album" },
    { name: "교회 연혁", path: "/history", id: "history" },
    { name: "예배 시간", path: "/worship", id: "worship" },
    { name: "온라인 헌금", path: "/contribution", id: "contribution" },
    { name: "교회 오시는 길", path: "/location", id: "location" },
  ];
  const GetClick = (e: E) => {
    window.scroll({
      top: 0,
    });
  };
  return (
    <SidebarBox>
      <H2>{prop.title}</H2>
      <Ul>
        {pathName === "/greeting" ||
        "/introduction" ||
        "/pastor" ||
        "/sermon" ||
        "/news" ||
        "/album" ||
        "/location" ||
        "/worship" ||
        "/contribution" ? (
          intro_menus.map((menu, index) => {
            return (
              <Link
                to={menu.path}
                key={index}
                style={{
                  textDecoration: "none",
                }}
              >
                <Lihover id={menu.id} onClick={GetClick}>
                  {menu.name}
                </Lihover>
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
