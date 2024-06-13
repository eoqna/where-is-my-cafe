import { Colors } from "../../utils/colors";
import Icon from "@mdi/react";
import { mdiFacebook, mdiGooglePlus, mdiAlphaNBox } from '@mdi/js';
import { SocialLoginButton, SocialLoginLayout } from "../../assets/css/login";

const SocialLogin = () => {
  return (
    <SocialLoginLayout>
      <SocialLoginButton>
        <Icon path={mdiFacebook} color={Colors.Facebook} />
      </SocialLoginButton>
      <SocialLoginButton>
        <Icon path={mdiGooglePlus} />
      </SocialLoginButton>
      <SocialLoginButton>
        <Icon path={mdiAlphaNBox} color={Colors.Naver} />
      </SocialLoginButton>
    </SocialLoginLayout>
  );
};

export default SocialLogin;