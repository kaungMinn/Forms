import { ReactNode } from "react";

type PropTypes = {
  label: string;
  logo: ReactNode | string;
  handleClick: () => void;
  bgColor?: string;
  textColor?: string;
};

const SimpleCard = (props: PropTypes) => {
  const { label, logo, handleClick, bgColor, textColor } = props;
  return (
    <div
      className={` h-[9rem] flex flex-col justify-center rounded-md space-y-5 border  cursor-pointer  ${
        bgColor ? bgColor : "bg-default"
      } ${textColor && textColor}`}
      onClick={() => handleClick()}
    >
      <div className={`flex items-center justify-center  `}>
        <div>{logo && logo}</div>
      </div>
      <p className={`text-center body-font `}>{label && label}</p>
    </div>
  );
};

export default SimpleCard;
