import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { Layout } from "../../assets/css/common";
import { ComponentProps } from "../../navigation";
import { Colors } from "../../utils/colors";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGooglePlus, mdiAlphaN  } from '@mdi/js';

const Container = styled.div`
  background: ${Colors.White};
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  display: flex;
  overflow: hidden;
  width: 750px;
  max-width: 100%;
  min-height: 480px;
  box-sizing: border-box;
`;

const LoginLayout = styled.div`
  position: absolute;
  width: 50%;  
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.6s ease-in-out;
  z-index: 2;
  box-sizing: border-box;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1<{ $color: string }>`
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.$color};
`;

const SocialLoginLayout = styled.div`
  dispaly: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const SocialLoginButton = styled.button`
  width: 50px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.White};
  border: none;
  margin: 0 5px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 12px;
`;

const Input = styled.input`
  box-sizing: border-box;
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;
`;

const FindPasswordText = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

const LoginButton = styled.button<{ $bg: string, $border: string }>`
  border-radius: 20px;
  border: 1px solid ${(props) => props.$border};
  background: ${(props) => props.$bg};
  color: #FFFFFF;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
`;

const JoinLayout = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  right: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
  box-sizing: border-box;
  background: #FF416C;
  z-index: 3;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: ${Colors.White};
`;

interface SingInProps {
  user_id: string;
  password: string;
};

interface SingUpProps extends SingInProps {
  name: string;
};

const initLoginInfo: SingInProps = {
  user_id: "",
  password: "",
};

const initJoinInfo: SingUpProps = {
  user_id: "",
  password: "",
  name: "",
}

const Login = (props: ComponentProps) => {
  const { navigation } = props;
  const [ loginInfo, setLoginInfo ] = useState<SingInProps>(initLoginInfo);
  const [ joinInfo, setJoinInfo ] = useState<SingUpProps>(initJoinInfo);
  const [ monitor, setMonitor ] = useState(false);

  const onClickSocialBtn = useCallback(() => {
    return;
  }, []);

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

    setLoginInfo(initLoginInfo);
    setJoinInfo(initJoinInfo);

    const timer = setTimeout(() => {
      setMonitor(() => !monitor);

      clearTimeout(timer);
    }, 300);
  }, [monitor]);

  return (
    <Layout>
    {!monitor
      ? <Container>
          <LoginLayout className="sign_in_layout">
            <LoginForm onSubmit={(e) => submit(e)}>
              <Title $color={Colors.Black}>Sign In</Title>
              <SocialLoginLayout>
                <SocialLoginButton>
                  <Icon path={mdiFacebook} color={Colors.Facebook} />
                </SocialLoginButton>
                <SocialLoginButton>
                  <Icon path={mdiGooglePlus} />
                </SocialLoginButton>
              </SocialLoginLayout>
              <Text>or use your account</Text>
              <Input 
                type="text"
                value={loginInfo.user_id}
                onChange={(e) => setLoginInfo({ ...loginInfo, user_id: e.target.value })}
                placeholder="ID"
              />
              <Input 
                type="text"
                value={loginInfo.password}
                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                placeholder="Password"
              />
              <FindPasswordText>Forgot your password?</FindPasswordText>
              <LoginButton $bg={Colors.Login} $border={Colors.Login}>Sign In</LoginButton>
            </LoginForm>
          </LoginLayout>
          <JoinLayout className="sign_up_layout">
            <Title $color={Colors.White}>Hello, Friend!</Title>
            <SubTitle>Enter your personal details and start journey with us</SubTitle>
            <LoginButton $bg="transparent" $border={Colors.White} onClick={onClickSubButton}>SIGN UP</LoginButton>
          </JoinLayout>
        </Container>
      : <Container>
          <LoginLayout className="sign_in_layout">
            <LoginForm onSubmit={(e) => submit(e)}>
              <Title $color={Colors.Black}>Create Account</Title>
              <SocialLoginLayout>
                <SocialLoginButton>
                  <Icon path={mdiFacebook} color={Colors.Facebook} />
                </SocialLoginButton>
                <SocialLoginButton>
                  <Icon path={mdiGooglePlus} />
                </SocialLoginButton>
              </SocialLoginLayout>
              <Text>or use your id for registration</Text>
              <Input 
                type="text"
                value={joinInfo.name}
                onChange={(e) => setJoinInfo({ ...joinInfo, name: e.target.value })}
                placeholder="Name"
              />
              <Input 
                type="text"
                value={joinInfo.user_id}
                onChange={(e) => setJoinInfo({ ...joinInfo, user_id: e.target.value })}
                placeholder="ID"
              />
              <Input 
                type="text"
                value={joinInfo.password}
                onChange={(e) => setJoinInfo({ ...joinInfo, password: e.target.value })}
                placeholder="Password"
              />
              <LoginButton $bg={Colors.Login} $border={Colors.Login}>Sign Up</LoginButton>
            </LoginForm>
          </LoginLayout>
          <JoinLayout className="sign_up_layout">
            <Title $color={Colors.White}>Welcome Back!</Title>
            <SubTitle>To keep connected with us please login with your personal info</SubTitle>
            <LoginButton $bg="transparent" $border={Colors.White} onClick={onClickSubButton}>SIGN IN</LoginButton>
          </JoinLayout>
        </Container>
      }
    </Layout>
  );
};

export default Login;