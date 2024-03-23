import { GOOGLE_OAUTH_URI, KAKAO_AUTH_URL } from '../../Oauth/OauthData';
import { SmallSubtitle } from '../../../components/Typography';
import { SocialLoginBox, SocialLoginButton } from '../style';
import GoogleLoginIcon from '../../../assets/image/google_login_icon.png';
import KakaoLoginIcon from '../../../assets/image/kakao_login_icon.png';

export const SocialLogin = () => {
	return(
	  <SocialLoginBox>
        <SmallSubtitle>소셜 로그인 / 회원가입</SmallSubtitle>
        <div className="social__buttons">
          <SocialLoginButton href={GOOGLE_OAUTH_URI}>
            <img alt="social-icon" src={GoogleLoginIcon} />
          </SocialLoginButton>
          <SocialLoginButton href={KAKAO_AUTH_URL}>
            <img alt="social-icon" src={KakaoLoginIcon} />
          </SocialLoginButton>
        </div>
      </SocialLoginBox>
	)
}