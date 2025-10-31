import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const Ul = styled.ul`
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Li = styled.li``;

const A = styled.a`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 50%;
  text-decoration: none;

  &:hover {
    color: #fff;
    border: 1px solid skyblue;
    background-color: skyblue;
  }
`;

export default function Pagination({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
}: any) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Page>
      <Ul>
        <Li>
          <A href="#">&laquo;</A>
        </Li>
        {pageNumbers.map((number) => (
          <Li key={number} className="page-item">
            <A
              onClick={() => paginate(number)}
              style={currentPage === number ? { color: "#000" } : null}
            >
              {number}
            </A>
          </Li>
        ))}
        <Li>
          <A href="#">&raquo;</A>
        </Li>
      </Ul>
    </Page>
  );
}
