import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import moment from "moment";
import styled from "styled-components";

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

const NoticeComponent = (props: any) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get("http://localhost:8080/post/takepost");
      console.log(res.data.date);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Content>
      <TopInner>
        <TopInnerText>공지사항</TopInnerText>
      </TopInner>
      <div>
        <PostWriteContainer>
          <Link to={"/MakePost"}>
            <PostWrite>글쓰기</PostWrite>
          </Link>
        </PostWriteContainer>
        <div>
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
                  <Td>{post.title}</Td>
                  <Td>{moment(post.date).format("YYYY-MM-DD")}</Td>
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

export default NoticeComponent;
