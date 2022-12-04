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

const NoticeComponent = (props: any) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await axios.get("http://localhost:8080/post/takepost");
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
          <table>
            <colgroup>
              <col width="5%" />
              <col width="*" />
              <col width="50%" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
              <col width="*" />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>구분</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일시</th>
                <th>조회수</th>
                <th>첨부</th>
              </tr>
            </thead>
            <tbody>
              {currentPosts.map((post) => (
                <tr key={post._id}>
                  <td>{post._id}</td>
                  <td>{post.type}</td>
                  <td>{post.title}</td>
                  <td>{post.userName}</td>
                  <td>{moment(post.date).format("YYYY-MM-DD")}</td>
                  <td>{post.readCount}</td>
                  <td>
                    {post.fileList.length > 0 && (
                      <img src="/images/board_attach.gif" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
