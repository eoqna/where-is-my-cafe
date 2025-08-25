import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import { Colors } from "../utils/colors";
import Login from "../pages/Login";
import Home from "../pages/Home";
import useDataStore from "../store/useDataStore";
import { getCookie } from "../utils/cookie";
import { useEffect } from "react";
import useAppStore from "../store/useAppStore";
import Sidebar from "../components/Sidebar";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  background: ${Colors.BG};
`;

const Navigations = () => {
  const navigation = useNavigate();
  const { sidebar, openSidebar } = useAppStore();
  const { isLogin } = useDataStore();
  const login = getCookie("login");

  useEffect(() => {
    if (login !== 1) {
      navigation("/login");
      return;
    }

    isLogin(true);
    openSidebar(true);
    navigation("/");
  }, []);

  return (
    <Layout>
      <Layout>
        {sidebar && <Sidebar />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login navigation={navigation} />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default Navigations;