import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import moment from "moment";
import styled from "styled-components";
import AOS from "aos"; // AOS import
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import img1 from "../../../assets/images/icon-detail-in-file.png";
import fileDownload from "js-file-download";
const Content = styled.div``;

const TopInner = styled.div``;
const TopInnerText = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
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

const NoticeComponent = (props: any) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [token, setToken] = useState("");
  const [file, setFile] = useState([]);

  useEffect(() => {
    setToken(window.sessionStorage.getItem("token"));
    const fetchPosts = async () => {
      let res = await axios.get("http://localhost:8080/post/takepost");
      setPosts(res.data);
      console.log(res.data);
      setFile(res.data.File);
    };
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const download = (e: any, name: string, id: any) => {
    e.preventDefault();
    axios({
      url: "http://localhost:8080/post/download",
      method: "get",
      params: { id: id },
      responseType: "blob",
    }).then((res) => {
      console.log(res.data);
      fileDownload(res.data, name);
    });
  };
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
            <Link to={"/MakePost"}>
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
                <Th>첨부파일</Th>
              </tr>
            </Thead>
            <tbody>
              {currentPosts.map((post) => (
                <tr key={post.id}>
                  <Td>{post.id}</Td>
                  <Td>
                    <StyledLink to={"/showpost/" + String(post.id)}>
                      {post.title}
                    </StyledLink>
                  </Td>
                  <Td>{moment(post.createdAt).format("YYYY-MM-DD")}</Td>
                  <Td>
                    {post.File.length ? (
                      <div
                      style={{cursor:'pointer'}}
                        onClick={(e) => {
                          download(e, post.File[0].name, post.File[0].id);
                        }}
                      >
                        <img src={img1} />
                      </div>
                    ) : (
                      ""
                    )}
                  </Td>
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
