import { Layout } from "../assets/css/common";
import { useCallback, useEffect, useRef } from "react";
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
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
`;

const Home = () => {
  const { allCafeList, setAllCafeList, setCafeList } = useDataStore();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  
  // 마커들을 초기화하는 함수
  const clearMarkers = useCallback(() => {
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];
  }, []);

  // 카페 검색 함수
  const searchCafes = useCallback((ps: any) => {
    clearMarkers();
    if (allCafeList.length) setAllCafeList([]);
    
    ps.categorySearch("CE7", (data: ApiResponse.CafeInfoProps[], status: Window & typeof globalThis) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const newCafeList = [...data];
        setAllCafeList(newCafeList);
        
        // 바로 카페 목록 업데이트
        setCafeList(newCafeList.slice(0, 10));

        data.forEach((v) => {
          const position = new window.kakao.maps.LatLng(v.y, v.x);
          const marker = new window.kakao.maps.Marker({
            position: position
          });
    
          marker.setMap(mapInstanceRef.current);
          markersRef.current.push(marker);
        });
      }
    }, { useMapBounds: true });
  }, [allCafeList, clearMarkers, setCafeList]);
  
  const onLoadKakaoMap = useCallback(() => {
    const position: Window & typeof globalThis = new window.kakao.maps.LatLng(37.6043902, 126.9150857);
    const options = {
      center: position,
      level: 5,
      tileAnimation: true,
      renderingMode: "vector",
      draggable: true,
      zoomable: true
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);
    mapInstanceRef.current = map;
    const ps = new window.kakao.maps.services.Places(map);

    // 지도 영역 변경 이벤트 리스너
    window.kakao.maps.event.addListener(map, 'bounds_changed', () => {
      // 지도 이동이 완료된 후 0.5초 후에 카페 검색 실행
      setTimeout(() => {
        searchCafes(ps);
      }, 500);
    });

    // 초기 검색 실행
    searchCafes(ps);
  }, [allCafeList]);

  useEffect(() => {
    onLoadKakaoMap();
  }, []);


  return (
    <Layout>
      <Map ref={mapRef}></Map>
    </Layout>
  );
};

export default Home;