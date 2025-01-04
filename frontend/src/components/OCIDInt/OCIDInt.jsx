import Routes from "../Routes";
import Context from "../../context/Context";
import { useContext } from "react";
const OCIDInt = () => {
  const { isLogin } = useContext(Context);
  return (
    <div className="text-white flex py-4 px-4 h-20 xl:px-0">
      <div className="flex justify-between items-center font-poppins gap-4 bg-gradient-to-r from-blueocidp1 to-blueocidp2  w-full h-full rounded-xl xl:justify-center">
        <p className="xl:ml-8 ml-6 text-sm lg:text-[16px]  xl:font-semibold">
          {isLogin ? "Login with" : "Register with"}
        </p>
        <div className="xl:mr-8 mr-6 ">
          <Routes />
        </div>
      </div>
    </div>
  );
};

export default OCIDInt;
