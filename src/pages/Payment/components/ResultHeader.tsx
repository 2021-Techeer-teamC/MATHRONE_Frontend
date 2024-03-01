import kakaopay from '../../../assets/image/kakaoPayment.png';
import Logo from '../../../components/Logo';
import { ResultHeaderBox } from '../style';

const ResultHeader = () => {
  return (
    <ResultHeaderBox container display="flex" direction="row" justifyContent="center" alignItems="center">
      <Logo />
      <div className="circle_div">
        <div className="circle " />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
      </div>
      <img alt="kakao-pay" className="kakaopay_img" src={kakaopay} />
    </ResultHeaderBox>
  );
};

export default ResultHeader;
