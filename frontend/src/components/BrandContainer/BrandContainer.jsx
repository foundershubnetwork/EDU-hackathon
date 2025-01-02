import fhnxl from "../../assets/logos/fhn-logo-xl.png";
import fhn from "../../assets/logos/fhn-logo.png";

const BrandContainer = () => {
  return (
    <div className="p-[12px]">
      <img src={fhn} alt="brand-logo" className="block xl:hidden" />
      <img
        src={fhnxl}
        alt="brand-logo"
        className="hidden xl:h-[141px] xl:block"
      />
    </div>
  );
};

export default BrandContainer;
