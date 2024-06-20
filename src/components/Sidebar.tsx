import { mdiChevronLeft, mdiChevronRight, mdiClose, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import styled from "styled-components";
import { Colors } from "../utils/colors";
import { useCallback, useState } from "react";
import useDataStore from "../store/useDataStore";

const Layout = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  z-index: 200;
  height: 100%;
  min-width: 390px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 5px 0px 15px 0px;
  transform: translateX(0%);
  transition: all 0.3s ease-out;
  user-select: none;
`;

const SidebarControlButton = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translateY(-50%);
  z-index: 10;
  overflow: hidden;
  display: inline-block;
  font-size: 1px;
  line-height: 1px;
  color: transparent;
  vertical-align: top;
  width: 22px;
  height: 49px;
  background: ${Colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`;

const SearchBarLayout = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
  z-index: 100;
  width: 340px;
  padding: 15px 25px;
`;

const SearchBar = styled.div`
  position: relative;
  display: block;
  unicode-bidi: isolate;
`;

const SearchBox = styled.div`
  osition: relative;
  z-index: 110;
  height: 42px;
  padding-left: 45px;
  border: 2px solid ${Colors.Login};
  border-radius: 5px;
`;

const SearchButton = styled.button`
  overflow: hidden;
  display: inline-block;
  position: absolute;
  vertical-align: top;
  width: 36px;
  height: 35px;
  top: 8px;
  left: 8px;
  border: none;
  background: transparent;
`;

const InputBox = styled.div`
  position: relative;
  z-index: 0;
  padding-right: 43px;
`;

const InputBoxLabel = styled.label`
  position: absolute;
  inset: 0px;
  z-index: -1;
  color: rgb(156, 156, 156);
  line-height: 44px;
  font-weight: normal;
  display: block;
  width: 100%;
  font-size: 16px;
  height: 42px;
  letter-spacing: -0.2px;
  outline: none;
  margin: 0px;
  border: 0px;
  padding: 0px;
  appearance: none;
  background-color: transparent;
`;

const InputBoxText = styled.input`
  position: relative;
  color: rgb(0, 0, 0);
  font-weight: bold;
  display: block;
  width: 100%;
  font-size: 16px;
  height: 42px;
  letter-spacing: -0.2px;
  outline: none;
  margin: 0px;
  border: 0px;
  padding: 0px;
  appearance: none;
  background-color: transparent;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;
  width: 43px;
  background: rgb(255, 255, 255);
  border-radius: 0px 5px 5px 0px;
  font-size: 1px;
  line-height: 1px;
  margin: 0px;
  border: 0px;
  padding: 0px;
  appearance: none;
  cursor: pointer;
`;

const ContentLayout = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgb(255, 255, 255);
  padding-top: 76px;
  box-sizing: border-box;
`;

const CafeContentLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: #ddd;
  }
  ::-webkit-scrollbar-thumb { 
    background-color: #aaa;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

const RegionLayout = styled.div`
  flex: 0 0 auto;
  margin: 0px 25px -1px;
  padding-bottom: 17px;
`;

const RegionTextLayout = styled.div`
  position: relative;
  min-height: 24px;
  padding-right: 60px;
`;

const Region = styled.span`
  font-size: 19px;
  line-height: 24px;
  font-weight: bold;
  letter-spacing: -0.73px;
  color: rgb(51, 51, 51);
  vertical-align: top;
`;

const CafeListLayout = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  flex: 1 1 auto;
  flex-direction: column;
`;

const CafeList = styled.div`
  flex: 1 0 0px;
  overflow: hidden auto;
  border-top: 1px solid transparent;
`;

const CafeInfoLayout = styled.div`
  padding: 0px 25px 30px;
`;

const CafeInfo = styled.div`
  position: relative;
`;

const CafeImgLayout = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  border-radius: 3px;
  cursor: pointer;
`;

const CafeImg = styled.img`
  position: relative;
  height: 180px;
  left: 50%;
  width: 340px;
  transition: transform 0.23s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  transform: translateX(-50%) scale(1);
`;

const CafeTextLayout = styled.div`
  position: relative;
  padding-top: 16px;
  cursor: pointer;
`;

const CafeHeaderLayout = styled.div`
  padding-right: 23px;
`;

const CafeName = styled.strong`
  margin-right: 6px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -1px;
  color: rgb(0, 104, 195);
`;

const CategoryText = styled.span`
  margin-right: 8px;
  font-size: 14px;
  letter-spacing: -0.3px;
  color: rgb(143, 143, 143);
`;

const DescText = styled.p`
  overflow: hidden;
  margin-top: 8px;
  font-size: 16px;
  color: rgb(66, 66, 66);
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Sidebar = () => {
  const [ text, setText ] = useState("");
  const [ open, isOpen ] = useState(true);
  const { cafeList } = useDataStore();
  const path = "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA0MzBfMjY2%2FMDAxNzE0NDY2MTQ0ODg5.KGDCPBVbiG6yAj1RirUoroylMPix7BcwyRHjB2XJziEg.WDuIfCcx8liAGQU-1BX8ncYR5Tc8eleZ7YmWlvsB3ZQg.JPEG%2FKakaoTalk_20240430_165431398.jpg&type=sc960_832";

  const onClickSidebarControlButton = useCallback(() => {
    const layout = document.querySelector(".sidebar-layout") as HTMLElement;

    if( open ) {
      layout.style.transform = "translateX(-100%)";
    } else {
      layout.style.transform = "translateX(0%)";
    }

    isOpen(!open);
  }, [open]);

  const onMouseOverCafeImg = useCallback((id: string) => {
    const img = document.querySelector(`.cafe_img_${id}`) as HTMLElement;

    img.style.transform = "translateX(-50%) scale(1.1)";
  }, []);

  const onMouseLeaveCafeImg = useCallback((id: string) => {
    const img = document.querySelector(`.cafe_img_${id}`) as HTMLElement;

    img.style.transform = "translateX(-50%) scale(1)";
  }, []);

  const onClickCafeInfo = useCallback((url: string) => {
    window.open(url)
  }, []);

  return (
    <Layout className="sidebar-layout">
      <SidebarControlButton onClick={onClickSidebarControlButton}>
        <Icon path={open ? mdiChevronLeft : mdiChevronRight} color="rgb(156, 156, 156)" />
      </SidebarControlButton>
      <SearchBarLayout>
        <SearchBar>
          <SearchBox>
            <SearchButton>
              <Icon path={mdiMagnify} color={Colors.Login} />
            </SearchButton>
            <InputBox>
              {!text.length 
                ? <InputBoxLabel>카페명을 입력하세요</InputBoxLabel>
                : <DeleteButton><Icon path={mdiClose} size={1} color={Colors.Login} /></DeleteButton>}
              <InputBoxText 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </InputBox>
          </SearchBox>
        </SearchBar>
      </SearchBarLayout>
      <ContentLayout>
        <CafeContentLayout>
          <RegionLayout>
            <RegionTextLayout>
              <Region>상록구 월피동</Region>
            </RegionTextLayout>
          </RegionLayout>
          <CafeListLayout>
            <CafeList>
              {cafeList.map((v) => (
                <CafeInfoLayout key={v.id}>
                  <CafeInfo onClick={() => onClickCafeInfo(v.place_url)}>
                    <CafeImgLayout>
                      <CafeImg 
                        src={path} 
                        alt="카페이미지" 
                        onMouseOver={() => onMouseOverCafeImg(v.id)} 
                        onMouseLeave={() => onMouseLeaveCafeImg(v.id)}
                        className={`cafe_img_${v.id}`} 
                      />
                    </CafeImgLayout>
                    <CafeTextLayout>
                      <CafeHeaderLayout>
                        <CafeName>{v.place_name}</CafeName>
                        <CategoryText>{v.category_group_name}</CategoryText>
                      </CafeHeaderLayout>
                      <DescText>{v.road_address_name}</DescText>
                    </CafeTextLayout>
                  </CafeInfo>
                </CafeInfoLayout>
              ))}
            </CafeList>
          </CafeListLayout>
        </CafeContentLayout>
      </ContentLayout>
    </Layout>
  );
};

export default Sidebar;