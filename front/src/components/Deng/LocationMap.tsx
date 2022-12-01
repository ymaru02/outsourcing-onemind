import { useEffect } from "react";

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
      center: new window.kakao.maps.LatLng(35.816473, 128.643336), //지도의 중심좌표.
      level: 2, //지도의 레벨(확대, 축소 정도)
    };
    //지도 생성 및 객체 리턴
    let map = new window.kakao.maps.Map(mapContainer, options);
    // 마커 표시될 위치
    let markerPosition = new window.kakao.maps.LatLng(35.816473, 128.643336);
    // 마커 생성
    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    // 마커 지도 위에 표시
    marker.setMap(map);
    // 인포윈도우에 표출될 내용
    var iwContent = `<div style="width:100px;padding:5px;text-align:center;margin-left:20px;font-weight:bold;">한마음 교회<br>
        <a href="https://map.kakao.com/link/map/한마음 교회,35.816473,128.643336" style="color:blue; text-decoration:none" target="_blank">큰 지도 보기</a></div>`,
      iwPosition = new window.kakao.maps.LatLng(35.816473, 128.643336); //인포윈도우 표시 위치
    // 인포윈도우 생성
    var infowindow = new window.kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });
    // 마커 위에 인포윈도우 표시(두번째 파라미터 marker를 넣어주지 않으면 지도 위에 표시됨)
    infowindow.open(map, marker);

    // 지도타입 컨트롤 생성
    var mapTypeControl = new window.kakao.maps.MapTypeControl();
    // 지도에 컨트롤 표시
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    // 줌 컨트롤을 생성
    var zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  }, []);
  return <div id="map" style={{ width: "100%", height: "100%" }} />;
};

export default MapContainer;
