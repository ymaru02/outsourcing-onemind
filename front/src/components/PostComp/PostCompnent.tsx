import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const TextTag = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TitleInput = styled.input`
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  color: #999999;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
`;

const ButtonTag = styled.button`
  width: 120px;
  font-weight: 600;
  text-align: center;
  border-radius: 5px;
  transition: all 0.2s;
  border-color: skyblue;
  background-color: white;
`;

const Container = styled.div`
  margin-top: 10px;
  height: 423px;
  width: 100%;
  border: 1px solid black;
`;

export default function PostComponent() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const title = useRef(null);
  const navigate = useNavigate();
  const upload_file = useRef(undefined);
  const imageHandler = () => {
    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      const file = input.files[0];
      // multer에 맞는 형식으로 데이터 만들어준다.
      const formData = new FormData();
      formData.append("files", file); // formData는 키-밸류 구조
      // 백엔드 multer라우터에 이미지를 보낸다.
      axios({
        url: "http://localhost:8080/post/img",
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
        method: "post",
        data: formData,
        withCredentials: true,
      }).then((result) => {
        const IMG_URL = result.data;
        // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
        // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
        // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.

        // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        // 1. 에디터 root의 innerHTML을 수정해주기
        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // editor.root.innerHTML =
        //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.

        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, "image", IMG_URL);
      });
    });
  };
  const formats: string[] = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "background",
    "color",
    "link",
    "image",
    "video",
    "width",
  ];
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, false] }],
          [{ color: ["orange", "black"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          [
            { align: "" },
            { align: "center" },
            { align: "right" },
            { align: "justify" },
          ],
          ["size", "bold", "italic", "underline", "strike", "blockquote"],
        ],
        handlers: {
          // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
          image: imageHandler,
        },
      },
    };
  }, []);

  const sendData = async () => {
    const formData = new FormData();
    formData.append("files", upload_file.current.files[0]);
    const data = {
      title: title.current.value,
      authorId: "1",
      content: quillRef.current.value,
    };
    const result = await axios({
      url: "http://localhost:8080/post/upload",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      },
      method: "post",
      data: data,
      withCredentials: true,
    });
    console.log(result);
    formData.append("authorId", result.data.id);
    formData.append("originalName", upload_file.current.files[0].name);
    const Fileresult = await axios({
      url: "http://localhost:8080/post/attachfile",
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      },
      method: "post",
      data: formData,
      withCredentials: true,
    });
    navigate("/news");
  };
  return (
    <>
      <TextTag>제목</TextTag>
      <TitleInput ref={title}></TitleInput>
      <TextTag>내용</TextTag>
      <Container>
        <input type="file" ref={upload_file} id="upload-file" />
        <ReactQuill
          style={{ height: "360px", color: "#999999", borderRadius: "5px" }}
          ref={quillRef}
          theme="snow"
          placeholder="글을 작성해 주세요"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
        />
      </Container>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ButtonTag onClick={sendData}>보내기</ButtonTag>
      </div>
    </>
  );
}
