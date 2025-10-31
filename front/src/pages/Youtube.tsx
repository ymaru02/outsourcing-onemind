import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import moment from "moment";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";

const Content = styled.div``;

const TopInner = styled.div``;
const TopInnerText = styled.span`
  font-weight: bold;
`;

const PostWriteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const PostWrite = styled.button`
  padding: 4px 12px;
  background-color: rgba(255, 255, 255, 1);
  font-size: 0.7em;
  width: 120px;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  transition: all 0.2s;
  border-color: skyblue;
  background-color: white;
`;

const PostTable = styled.table`
  text-align: center;
  border: 1px #a39485 solid;
  font-size: 1em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
`;
const Thead = styled.thead`
  font-weight: bold;
  color: #fff;
  background: skyblue;
`;

const Th = styled.th`
  padding: 0.7em 0.5em;
  vertical-align: middle;
`;
const Td = styled.td`
  padding: 0.8em 0.5em;
  vertical-align: middle;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const YouTube = (props: any) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [token, setToken] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get("http://localhost:8080/you-tube/list");
      setPosts(res.data);
    };
    fetchPosts();
    setToken(window.sessionStorage.getItem("token"));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    AOS.init();
  });
  return (
    <Content>
      <TopInner>
        <TopInnerText>공지사항</TopInnerText>
      </TopInner>
      <div>
        <PostWriteContainer>
          {token ? (
            <Link to={"/MakeSermon"}>
              <PostWrite>글쓰기</PostWrite>
            </Link>
          ) : (
            <></>
          )}
        </PostWriteContainer>
        <div data-aos="fade-top" data-aos-duration="800">
          <PostTable>
            <colgroup>
              <col width="10%" />
              <col width="50%" />
              <col width="*" />
            </colgroup>
            <Thead>
              <tr>
                <Th>번호</Th>
                <Th>제목</Th>
                <Th>작성일시</Th>
              </tr>
            </Thead>
            <tbody>
              {currentPosts.map((post) => (
                <tr key={post.id}>
                  <Td>{post.id}</Td>
                  <Td>
                    <StyledLink to={"/showsermond/" + String(post.id)}>
                      {post.title}
                    </StyledLink>
                  </Td>
                  <Td>{moment(post.createdAt).format("YYYY-MM-DD")}</Td>
                </tr>
              ))}
            </tbody>
          </PostTable>
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          currentPage={currentPage}
          paginate={paginate}
        ></Pagination>
      </div>
    </Content>
  );
};

export default YouTube;
