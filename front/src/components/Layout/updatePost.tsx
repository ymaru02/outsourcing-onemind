import React, { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import styled from "styled-components";
import { useParams } from "react-router-dom";

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
  height: 400px;
  width: 100%;
  border: 1px solid black;
`;

export default function UpdatePost() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const title = useRef(null);
  const { id } = useParams();
  const imageHandler = () => {
    console.log("에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!");

    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.

    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      console.log("온체인지");
      const file = input.files[0];
      // multer에 맞는 형식으로 데이터 만들어준다.
      const formData = new FormData();
      formData.append("files", file); // formData는 키-밸류 구조
      // 백엔드 multer라우터에 이미지를 보낸다.
      console.log(input.files[0]);
      console.log(quillRef);
      axios({
        url: "http://localhost:8080/post/img",
        method: "post",
        data: formData,
        withCredentials: true,
      }).then((result) => {
        console.log(result.data);
        console.log("성공 시, 백엔드가 보내주는 데이터", result.data);
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
    const data = {
      title: title.current.value,
      authorId: "1",
      content: quillRef.current.value,
    };
    const name = await axios({
      url: "http://localhost:8080/auth/takeid",
      method: "get",
      data: { name: window.sessionStorage.getItem("userName") },
      withCredentials: true,
    });
    const result = await axios({
      url: "http://localhost:8080/post/update",
      method: "post",
      data: { id: name.data, data: data },
      withCredentials: true,
    });
    console.log(result);
  };
  useEffect(() => {
    axios({
      url: "http://localhost:8080/post/takecontent",
      method: "get",
      params: { id: id },
      withCredentials: true,
    }).then((result) => {
      console.log(result.data);
      setValue(result.data.content);
    });
  });
  return (
    <>
      <TextTag>제목</TextTag>
      <TitleInput ref={title}></TitleInput>
      <TextTag>내용</TextTag>
      <Container>
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
        <ButtonTag onClick={sendData}>수정하기</ButtonTag>
      </div>
    </>
  );
}
