import { ComponentProps } from "../navigation";
import { Layout } from "../assets/css/common";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { KAKAO_REST_API_KEY } from "../utils/config";
import axiosClient from "../utils/axiosClient";
import useDataStore from "../store/useDataStore";

declare global {
  interface Window {
    kakao: any;
  }
};

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

interface CafeInfoProps {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

const Home = () => {
  const { cafeList, setCafeList } = useDataStore();
  
  const onLoadKakaoMap = useCallback(() => {
    const container = document.getElementById("map") as HTMLElement;
    const position = new window.kakao.maps.LatLng(33.450701, 126.570667);
    const options = { center: position, level: 5, };
    const map = new window.kakao.maps.Map(container, options);
    const ps = new window.kakao.maps.services.Places(map);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    const placesSearchCB = (data: CafeInfoProps[], status: any) => {
      if (status === window.kakao.maps.services.Status.OK) {
        if( cafeList.length ) setCafeList([]);
        
        data.map((v, i) => {
          // 마커를 생성하고 지도에 표시합니다
          const position = new window.kakao.maps.LatLng(v.y, v.x);
          const cafe = cafeList;
          cafe.push(v);
          setCafeList(cafe);
    
          const marker = new window.kakao.maps.Marker({
            position: position
          });
    
          marker.setMap(map);
        });

        console.log(data);
      }
    };

    ps.categorySearch("CE7", placesSearchCB, { useMapBounds: true }); 
  }, [cafeList]);

  useEffect(() => {
    onLoadKakaoMap();
  }, []);

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
      <Map id="map"></Map>
    </Layout>
  );
};

export default Home;