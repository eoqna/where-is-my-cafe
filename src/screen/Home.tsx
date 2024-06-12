import { ComponentProps } from "../navigation";
import { Layout } from "../assets/css/common";
import { useEffect } from "react";
import useDataStore from "../store/useDataStore";

const Home = (props: ComponentProps) => {
  const { navigation } = props;
  const { login } = useDataStore();

  useEffect(() => {
    if( !login ) return navigation("/login");
  }, []);

  return (
    <Layout>

    </Layout>
  );
};

export default Home;