import { useEffect } from "react";
import { MapBox } from "../styles/Location";

declare global {
  // declare - 컴파일러에게 해당 변수나 함수가 이미 존재한다는 것을 알리는 역할
  interface Window {
    kakao: any;
  }
}

const MapContainer = () => {
  useEffect(() => {
    let mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    new window.kakao.maps.Map(mapContainer, options); //지도 생성 및 객체 리턴
  }, []);
  return <MapBox id="map" style={{ width: "100vw", height: "100vh" }} />;
};

export default MapContainer;
