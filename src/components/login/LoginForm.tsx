import { useCallback, useState } from "react";
import { Colors } from "../../utils/colors";
import SocialLogin from "./SocialLogin";
import { NavigateFunction } from "react-router-dom";
import { Container, FindPasswordText, Input, JoinLayout, LoginButton, LoginFormLayout, LoginLayout, SubTitle, Text, Title } from "../../assets/css/login";

const initUserInfo: LoginReq.SingUpProps = {
  user_id: "",
  password: "",
  name: "",
};

interface LoginComponentProps {
  text: LoginReq.TextProps;
  monitor: boolean;
  setMonitor: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: NavigateFunction;
};

const LoginForm = (props: LoginComponentProps) => {
  const { text, monitor, setMonitor, navigation } = props;
  const [ userInfo, setUserInfo ] = useState(initUserInfo);

  const submit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  const onClickSubButton = useCallback(() => {
    const signIn = document.querySelector(".sign_in_layout") as HTMLElement;
    const signUp = document.querySelector(".sign_up_layout") as HTMLElement;

    if( !signIn.style.left || signIn.style.left === "0px" ) {
      signIn.style.left = "50%";
      signUp.style.right = "50%";
    } else {
      signIn.style.left = "0";
      signUp.style.right = "0";
    }

    setUserInfo(initUserInfo);

    const timer = setTimeout(() => {
      setMonitor(() => !monitor);

      clearTimeout(timer);
    }, 300);
  }, [monitor]);

  const onClickButtonInLoginForm = useCallback(() => {
    if( !userInfo.name ) {
      console.log("로그인한다링");
    }
  }, [userInfo]);

  return (
    <Container>
      <LoginLayout className="sign_in_layout">
        <LoginFormLayout onSubmit={(e) => submit(e)}>
          <Title $color={Colors.Black}>{text.loginTitle}</Title>
          <SocialLogin />
          {!monitor 
            ? <Text>or use your account</Text>
            : <Input 
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                placeholder="Name"
              />
          }
          <Input 
            type="text"
            value={userInfo.user_id}
            onChange={(e) => setUserInfo({ ...userInfo, user_id: e.target.value })}
            placeholder="ID"
          />
          <Input 
            type="password"
            value={userInfo.password}
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
            placeholder="Password"
          />
          
          {!monitor && <FindPasswordText>Forgot your password?</FindPasswordText>}
          <LoginButton 
            $bg={Colors.Login} 
            $border={Colors.Login}
            onClick={onClickButtonInLoginForm}
          >
            {text.loginButton}
          </LoginButton>
        </LoginFormLayout>
      </LoginLayout>
      <JoinLayout className="sign_up_layout">
        <Title $color={Colors.White}>{text.joinTitle}</Title>
        <SubTitle>{text.joinText}</SubTitle>
        <LoginButton $bg="transparent" $border={Colors.White} onClick={onClickSubButton}>{text.joinButton}</LoginButton>
      </JoinLayout>
    </Container>
  );
};

export default LoginForm;