import styled from "styled-components";

const Layout = styled.header`
  display: flex;
  position: relative;
  z-index: 300;
  flex-direction: column;
  height: 100%;
  background-color: rgb(255, 255, 255);
  user-select: none;
`;

const LogoBox = styled.h1`
  display: flex;
  flex: 0 0 auto;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 76px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const MenuLayout = styled.nav`
  width: 63px;
  min-height: 1px;
  flex: 1 1 0%;
`;

const MenuList = styled.ul`
  overflow: hidden;
  max-width: 390px;
  height: 100%;
`;

const Header = () => {
  return (
    <Layout>
      <LogoBox></LogoBox>
      <MenuLayout>
        <MenuList>
          
        </MenuList>
      </MenuLayout>
    </Layout>
  );
};

export default Header;