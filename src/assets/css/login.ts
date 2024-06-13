import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const Container = styled.div`
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

export const LoginLayout = styled.div`
  position: absolute;
  width: 50%;  
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.6s ease-in-out;
  z-index: 2;
  box-sizing: border-box;
`;

export const LoginFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1<{ $color: string }>`
  font-weight: bold;
  margin: 0;
  color: ${(props) => props.$color};
`;

export const SocialLoginLayout = styled.div`
  dispaly: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const SocialLoginButton = styled.button`
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

export const Text = styled.span`
  font-size: 12px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;
`;

export const FindPasswordText = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const LoginButton = styled.button<{ $bg: string, $border: string }>`
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

export const JoinLayout = styled.div`
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
  background: ${Colors.Login};
  z-index: 3;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  color: ${Colors.White};
`;