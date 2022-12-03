import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

const TopBtnBox = styled.div`
  position: fixed;
  right: 5%;
  bottom: 5%;
  z-index: 1;
`;
const TopBtnStyle = styled.button`
  font-weight: bold;
  font-size: 15px;
  padding: 15px 10px;
  background-color: ${theme.subColor};
  color: ${theme.mainColor};
  border: 1px solid ${theme.mainColor};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  &:hover {
    font-size: 18px;
    background-color: ${theme.subColor};
    color: ${theme.mainColor};
  }
`;

// interface TopBtnType {
//   showBtn: boolean;
// }

const TopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);
  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handle = () => {
      if (window.scrollY > 350) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);
  return (
    showBtn && (
      <TopBtnBox>
        <TopBtnStyle onClick={scrollTop} type="button">
          Top
        </TopBtnStyle>
      </TopBtnBox>
    )
  );
};

export default TopBtn;
