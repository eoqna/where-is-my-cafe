import { ComponentProps } from "../navigation";
import { Layout } from "../assets/css/common";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { KAKAO_REST_API_KEY } from "../utils/config";
import axiosClient from "../utils/axiosClient";

declare global {
  interface Window {
    kakao: any;
  }
};

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = (props: ComponentProps) => {
  const { navigation } = props;

  const onLoadKakaoMap = useCallback(() => {
    const container = document.getElementById("map");
    const position = new window.kakao.maps.LatLng(33.450701, 126.570667);
    const options = {
      center: position,
      level: 3,
    };

    const map = new window.kakao.maps.Map(container, options);

    var marker = new window.kakao.maps.Marker({
      position: position
    });

    marker.setMap(map);

    const ps = new window.kakao.maps.services.Places(map); 

    // 카테고리로 은행을 검색합니다
    ps.categorySearch('CE7', placesSearchCB, {useMapBounds:true}); 
  }, []);

  // 키워드 검색 완료 시 호출되는 콜백함수 입니다
  function placesSearchCB (data: any, status: any, pagination: number) {
    console.log("status: ", status);
    console.log("data: ", data);
  };

  useEffect(() => {
    onLoadKakaoMap();
  }, [onLoadKakaoMap]);

  const searchCafeListToKakao = useCallback(async () => {
    const strParam = "query=''&category_group_code=CE7&x=33.450701&y=126.570667&radius=500"
    const data = await axiosClient.get(`https://dapi.kakao.com/v2/local/search/keyword.json?${strParam}`, 
      { 
        headers: {
          "Content-Type": "application/json",
          "Authorization": `KakaoAK ${KAKAO_REST_API_KEY}`} 
      },
    );

    console.log(data);
  }, []);

  // useEffect(() => {
  //   searchCafeListToKakao();
  // }, []);

  return (
    <Layout>
      <Map id="map"
      ></Map>
    </Layout>
  );
};

export default Home;