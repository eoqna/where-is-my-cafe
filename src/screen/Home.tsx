import { Layout } from "../assets/css/common";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
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

const Home = () => {
  const { allCafeList, cafeList, setAllCafeList, setCafeList } = useDataStore();
  
  const onLoadKakaoMap = useCallback(() => {
    const container = document.getElementById("map") as HTMLElement;
    const position: Window & typeof globalThis = new window.kakao.maps.LatLng(37.6043902, 126.9150857);
    const options = { center: position, level: 5 };
    const map: Window & typeof globalThis = new window.kakao.maps.Map(container, options);
    const ps = new window.kakao.maps.services.Places(map);

    // 키워드 검색 완료 시 호출되는 콜백 함수
    const placesSearchCB = (data: ApiResponse.CafeInfoProps[], status: Window & typeof globalThis) => {
      if (status === window.kakao.maps.services.Status.OK) {
        if( allCafeList.length ) setAllCafeList([]);
        
        data.map((v) => {
          // 마커를 생성하고 지도에 표시합니다
          const position = new window.kakao.maps.LatLng(v.y, v.x);
          const cafe = allCafeList;
          cafe.push(v);
          setAllCafeList(cafe);
    
          const marker = new window.kakao.maps.Marker({
            position: position
          });
    
          marker.setMap(map);
        });

        initCafeList();
      }
    };

    ps.categorySearch("CE7", placesSearchCB, { useMapBounds: true }); 
  }, [allCafeList]);

  useEffect(() => {
    onLoadKakaoMap();
  }, []);

  const initCafeList = useCallback(() => {
    const cafe = allCafeList.filter((_, i) => i < 10);

    setCafeList(cafe);
  }, [cafeList]);

  return (
    <Layout>
      <Map id="map"></Map>
    </Layout>
  );
};

export default Home;