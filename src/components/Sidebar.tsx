import { mdiChevronLeft, mdiClose, mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import styled from "styled-components";
import { Colors } from "../utils/colors";
import { useCallback, useState } from "react";
import useAppStore from "../store/useAppStore";

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

const CafeContentLayout = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  background: rgb(255, 255, 255);
  padding-top: 76px;
  box-sizing: border-box;
`;

const Sidebar = () => {
  const [ text, setText ] = useState("");
  const { sidebar, openSidebar } = useAppStore();

  const onClickSidebarControlButton = useCallback(() => {
    const layout = document.querySelector(".sidebar-layout") as HTMLElement;

    console.log(layout.style.transform);

    layout.style.transform = "translateX(-100%)";
  }, [sidebar])

  return (
    <Layout className="sidebar-layout">
      <SidebarControlButton onClick={onClickSidebarControlButton}>
        <Icon path={mdiChevronLeft} color="rgb(156, 156, 156)" />
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
      <CafeContentLayout></CafeContentLayout>
    </Layout>
  );
};

export default Sidebar;