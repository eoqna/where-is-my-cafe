declare namespace LoginReq {
  interface SingInProps {
    user_id: string;
    password: string;
  };
  
  interface SingUpProps extends SingInProps {
    name: string;
  };
  
  interface TextProps {
    loginButton: string;
    joinButton: string;
    loginTitle: string;
    joinTitle: string;
    joinText: string;
  };
}