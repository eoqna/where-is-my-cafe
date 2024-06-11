import { Route, Routes, useNavigate } from "react-router";
import styled from "styled-components";
import Home from "../screen/Home";
import { Colors } from "../utils/colors";
import Login from "../screen/start/Login";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  background: ${Colors.BG};
`;

const Navigations = () => {
  const navigation = useNavigate();

  return (
    <Layout>
      <Routes>
        <Route index element={<Home navigation={navigation} />} />
        <Route path="/login" element={<Login navigation={navigation} />} />
      </Routes>
    </Layout>
  );
};

export default Navigations;