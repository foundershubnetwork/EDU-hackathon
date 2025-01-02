import github from "../../assets/signup-icons/github.png";
import google from "../../assets/signup-icons/google.png";
import linkedin from "../../assets/signup-icons/linkedin.png";
import apple from "../../assets/signup-icons/apple.png";

const SocialSignUp = () => {
  return (
    <div className="flex items-center justify-between w-full gap-[16px] px-[14px]">
      <div className="social-boxes">
        <img src={github} alt="" className="h-[20px]" />
      </div>
      <div className="social-boxes">
        <img src={linkedin} alt="" className="h-[20px]" />
      </div>
      <div className="social-boxes">
        <img src={google} alt="" className="h-[20px]" />
      </div>
      <div className="social-boxes">
        <img src={apple} alt="" className="h-[20px]" />
      </div>
    </div>
  );
};

export default SocialSignUp;
