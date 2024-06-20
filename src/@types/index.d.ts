declare namespace ApiResponse {
  interface CafeInfoProps {
    address_name: string;
    category_group_code: string;
    category_group_name: string;
    category_name: string;
    distance: string;
    id: string;
    phone: string;
    place_name: string;
    place_url: string;
    road_address_name: string;
    x: string;
    y: string;
  };
}

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