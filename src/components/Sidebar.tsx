import { mdiChevronLeft, mdiChevronRight, mdiClose, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import { Colors } from "../utils/colors";
import { useCallback, useState } from "react";
import useDataStore from "../store/useDataStore";
import { CafeContentLayout, CafeHeaderLayout, CafeImg, CafeImgLayout, CafeInfo, CafeInfoLayout, CafeList, CafeListLayout, CafeName, CafeTextLayout, CategoryText, ContentLayout, DeleteButton, DescText, InputBox, InputBoxLabel, InputBoxText, Layout, Region, RegionLayout, RegionTextLayout, SearchBar, SearchBarLayout, SearchBox, SearchButton, SidebarControlButton } from "../assets/css/sidebar";

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
                <CafeInfoLayout key={`${v.id}${v.place_name}${v.address_name}`}>
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