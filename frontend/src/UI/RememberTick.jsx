import tick from "../assets/standard-icons/tick.png";

const RememberTick = () => {
  return (
    <div className="bg-gradient-to-t from-purpleactone to-purpleacttwo h-[20px] w-[20px] rounded">
      <img
        src={tick}
        alt="tickmark-icon"
        className={`absolute top-[2px] left-[2px] `}
      />
    </div>
  );
};

export default RememberTick;
