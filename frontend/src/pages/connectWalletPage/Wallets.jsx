import metamask from "../../assets/wallet-icons/metamask.png";
import phantom from "../../assets/wallet-icons/phantom.png";
import wallcon from "../../assets/wallet-icons/walletconnect.png";
import rightarrow from "../../assets/standard-icons/right-arrow.png";

const Wallets = () => {
  return (
    <div className="px-[14px] py-[20px] xl:px-0 xl:py-0">
      <div className="text-white flex justify-center xl:justify-start mb-[36px]">
        <p className="font-semibold text-[20px] xl:text-[40px]">
          Connect Your Wallet
        </p>
      </div>
      <div className="text-white flex justify-between wallet-pane xl:w-full">
        <div className="flex gap-[14px] items-center">
          <img
            src={metamask}
            alt="metamask logo"
            className="h-[22px] w-[26px]"
          />
          <p className="font-semibold text-[14px] xl:text-[16px]">Metamask</p>
        </div>
        <div className="flex gap-[10px] items-center">
          <p className="text-[10px] xl:text-[12px]">Recommended</p>
          <img src={rightarrow} alt="right-arrow" />
        </div>
      </div>
      <div>
        <div className="text-white flex justify-between items-center wallet-pane mt-[16px]">
          <div className="flex gap-[17px]">
            <img
              src={phantom}
              alt="phantom logo"
              className="h-[22px] w-[22px]"
            />
            <p className="font-semibold text-[14px] xl:text-[16px]">Phantom</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <p className="text-[10px] xl:text-[12px]">Installed</p>
            <img src={rightarrow} alt="right-arrow" />
          </div>
        </div>
      </div>
      <div>
        <div className="text-white flex justify-between wallet-pane mt-[16px] items-center">
          <div className="flex gap-[17px]">
            <img
              src={wallcon}
              alt="walletconnect logo"
              className="h-[22px] w-[22px]"
            />
            <p className="font-semibold text-[14px] xl:text-[16px]">
              Wallet Connect
            </p>
          </div>
          <div className="flex items-center gap-[6px]">
            <p className="text-[10px] xl:text-[12px]">Installed</p>
            <img src={rightarrow} alt="right-arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
