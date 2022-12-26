import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

interface Props {
  year: string;
}
const YearBox = styled.div`
  flex: 3;
  border-right: 2px solid ${theme.mainColor};
  text-align: center;
`;
export default function YearItem({ year }: Props) {
  return (
    <YearBox>
      <h2>{year}</h2>
    </YearBox>
  );
}
