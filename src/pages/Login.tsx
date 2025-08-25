import { useState, useEffect } from "react";
import { Layout } from "../assets/css/common";
import { NavigationProps } from "../navigation";
import { LoginForm } from "../components";

const initText: LoginReq.TextProps = {
  loginButton: "",
  joinButton: "",
  loginTitle: "",
  joinTitle: "",
  joinText: "",
};

const Login = ({ navigation }: NavigationProps) => {
  const [ text, setText ] = useState(initText);
  const [ monitor, setMonitor ] = useState(false);

  useEffect(() => {
    if (!monitor) {
      setText({
        loginButton: "SIGN IN",
        joinButton: "SIGN UP",
        loginTitle: "Sign In",
        joinTitle: "Hello, Friend!",
        joinText: "Enter your personal details and start journey with us",
      });
    } else {
      setText({
        loginButton: "SIGN UP",
        joinButton: "SIGN IN",
        loginTitle: "Create Account",
        joinTitle: "Welcome Back!",
        joinText: "To keep connected with us please login with your personal info",
      });
    }
  }, [monitor]);

  return (
    <Layout>
      <LoginForm text={text} monitor={monitor} setMonitor={setMonitor} navigation={navigation} />
    </Layout>
  );
};

export default Login;