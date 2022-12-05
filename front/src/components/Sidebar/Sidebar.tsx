import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { H2, Lihover, SidebarBox, Ul } from "../../styles/Intro";
import NotFound from "../NotFound";

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
    { name: "교회 소개", path: "/introduction", id: "introduction" },
    { name: "교회 소식", path: "/news", id: "news" },
    { name: "교회 앨범", path: "/album", id: "album" },
    { name: "교회 오시는 길", path: "/location", id: "location" },
    { name: "예배 시간", path: "/worship", id: "worship" },
  ];
  const [currentClick, setCurrentClick] = useState(); // 현재 클릭
  const GetClick = (e: E) => {
    // 클릭 이벤트
    console.log("currentClick", currentClick);
    // console.log("e.target.id", e.target.id);
    // console.log(document.getElementById(e.target.id));
    setCurrentClick(() => e.target.id); // << setCurrentClick로 currentClick를 바로 바꾸고 싶음
    window.scroll({
      top: 0,
    });
  };
  useEffect(() => {
    // (e) => {
    //   if (currentClick === e.target.id) {
    //     let currentId = document.getElementById(e.target.id);
    //     currentId.style.color = "black";
    //     currentId.style.borderBottom = "2px solid";
    //   }
    // },
    console.log("currentClick", currentClick);
  }, [currentClick]);
  return (
    <SidebarBox>
      <H2>{prop.title}</H2>
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
