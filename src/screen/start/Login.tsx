import styled from "styled-components";
import { Layout } from "../../assets/css/common";
import { ComponentProps } from "../../navigation";
import { Colors } from "../../utils/colors";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGooglePlus, mdiAlphaN  } from '@mdi/js';
import { useCallback } from "react";

const Container = styled.div`
  background: ${Colors.WHITE};
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

const LoginTitle = styled.h1`
  font-weight: bold;
`;

const SocialLoginLayout = styled.div`
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLoginButton = styled.button`
  width: 50px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${Colors.WHITE};
  border: none;
  margin: 0 5px;
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
  transition: transform 0.6s ease-in-out;
  box-sizing: border-box;
  background: #FF416C;
`;

const Login = (props: ComponentProps) => {
  const { navigation } = props;

  const onClickSocialBtn = useCallback(() => {
    return;
  }, []);

  return (
    <Layout>
      <Container>
        <LoginLayout className="sign_in_layout">
          <LoginForm action="#">
            <LoginTitle>Sign In</LoginTitle>
            <SocialLoginLayout>
              <SocialLoginButton onClick={onClickSocialBtn}>
                <Icon path={mdiFacebook} color={Colors.Facebook} />
              </SocialLoginButton>
              <SocialLoginButton onClick={onClickSocialBtn}>
                <Icon path={mdiGooglePlus} />
              </SocialLoginButton>
            </SocialLoginLayout>
          </LoginForm>
        </LoginLayout>
        <JoinLayout className="sign_in_layout">

        </JoinLayout>
      </Container>
    </Layout>
  );
};

export default Login;