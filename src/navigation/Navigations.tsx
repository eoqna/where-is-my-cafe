import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import { Colors } from "../utils/colors";
import Login from "../screen/start/Login";
import useDataStore from "../store/useDataStore";
import { getCookie } from "../utils/cookie";
import { useEffect } from "react";
import useAppStore from "../store/useAppStore";
import Sidebar from "../components/Sidebar";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.BG};
`;

const Navigations = () => {
  const navigation = useNavigate();
  const { sidebar, openSidebar } = useAppStore();
  const { isLogin } = useDataStore();
  const login = getCookie("login");

  useEffect(() => {
    if( login !== 1 ) {
      navigation("/login");
      return;
    }

    isLogin(true);
    openSidebar(true);
    navigation("/");
  }, []);

  return (
    <Layout>
      {sidebar && <Sidebar />}
      <Routes>
        <Route index element={<Home navigation={navigation} />} />
        <Route path="/login" element={<Login navigation={navigation} />} />
      </Routes>
    </Layout>
  );
};

export default Navigations;