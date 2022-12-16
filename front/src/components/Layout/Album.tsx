import React, { useEffect, useState, useRef } from "react";
import "aos/dist/aos.css";
import {
  Wrap,
  ImgBox,
  DivideBox,
  Img,
  ContentsBox,
  InfoTitleDiv,
} from "../../styles/Intro";
import Sidebar from "../Sidebar/Sidebar";
import Rainbow250 from "../../img/rainbowVer250.png";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`;

const TextTag = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const Inner = styled.div`
  width: 30%;
  gap: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  border-radius: 10px;
`;

const YearText = styled.div`
  font-weight: bold;
  font-size: 2em;
`;

const MonText = styled.div`
  font-weight: bold;
  font-size: 2em;
`;

const InputTag = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 30%;
  color: #999999;
  border-radius: 5px;
`;

const HiddenTag = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

const LabelTag = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: rgba(0, 53, 109, 0.95);
  cursor: pointer;
  height: 20px;
  margin-left: 10px;
  border-radius: 5px;
`;

const RegisTag = styled.button`
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: rgba(0, 53, 109, 0.95);
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
  border-radius: 5px;
`;
const DeleteTag = styled.button`
  background-color: white;
  border-radius: 5px;
  border: 0.1ch solid red;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
interface imgData {
  createdAt: string;
  id: number;
  imgLink: string;
}

export default function Album() {
  const [imgList, setImgList] = useState([]);
  const upload_file = useRef(null);
  const upload_name = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(window.sessionStorage.getItem("token"));
    const fetchPostimg = async () => {
      const params = { index: "2022" };
      let res = await axios.get("http://localhost:8080/member/takemember", {
        params,
      });

      setImgList(res.data.reverse());
    };
    fetchPostimg();
  }, []);

  const handleRegistImg = () => {
    const formData = new FormData();
    formData.append("files", upload_file.current.files[0]);

    axios.post("http://localhost:8080/member/uploaddata", formData, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      },
    });

    window.location.reload();
  };
  const handleChange = () => {
    if (isImage(upload_file.current.files[0])) {
      changeVal(upload_name.current, upload_file.current.files[0].name);
    }
  };

  const handleDelete = (index: number) => {
    const params = {
      index: index,
    };
    axios.delete(`http://localhost:8080/member/delete/`, {
      headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
      },
      params,
    });
    window.location.reload();
  };
  function isImage(file: any) {
    return file.type.indexOf("image") >= 0;
  }
  function changeVal(class_name: any, change_name: any) {
    class_name.value = change_name;
  }

  return (
    <Wrap>
      <div style={{ height: "80px" }}></div>
      <ImgBox>
        <Img
          src={Rainbow250}
          alt=""
          width="100%"
          height="100%"
          margin="0 0 -5px 0"
        />
      </ImgBox>
      <DivideBox>
        <Sidebar title="교회 앨범" />
        <ContentsBox>
          <InfoTitleDiv fontsize="20px">교회 앨범</InfoTitleDiv>
          {token ? (
            <div>
              <TextTag>사진 등록</TextTag>
              <InputTag
                type="text"
                ref={upload_name}
                value="이미지를 업로드 하세요"
                placeholder="이미지를 업로드 하세요"
                disabled
              />
              <LabelTag htmlFor="upload-file">파일선택</LabelTag>
              <RegisTag onClick={handleRegistImg}>등록</RegisTag>
              <HiddenTag
                type="file"
                ref={upload_file}
                id="upload-file"
                onChange={handleChange}
              />
            </div>
          ) : (
            <></>
          )}
          <YearText>2022</YearText>
          {imgList.map((mon, index) => {
            return mon.length ? (
              <div key={index}>
                <MonText>{12 - index}월</MonText>
                <Container>
                  {mon.map((data: imgData, i: number) => {
                    return (
                      <Inner key={i}>
                        <Image src={data.imgLink} />
                        <DeleteTag onClick={() => handleDelete(data.id)}>
                          삭제
                        </DeleteTag>
                      </Inner>
                    );
                  })}
                </Container>
              </div>
            ) : (
              <div key={index}></div>
            );
          })}
        </ContentsBox>
      </DivideBox>
    </Wrap>
  );
}
