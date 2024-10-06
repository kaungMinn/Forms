import React from "react";
import { useAppSelector } from "../../Hooks/ReduxProvider";

interface SecondaryButtonPropType {
  label?: string;
  icon?: React.ReactNode;

  /**
   * action
   */
  handleClickOn?: React.MouseEventHandler<HTMLButtonElement>;
}

const SecondaryButton: React.FC<SecondaryButtonPropType> = ({
  label,
  icon,
  /**
   * action
   */
  handleClickOn,
}: SecondaryButtonPropType) => {
  const theme = useAppSelector((state) => state.theme);
  const { primaryColor } = theme;
  return (
    <>
      <button
        className={`"space-x-2 flex h-auto w-full items-center justify-center rounded-md  bg-transparent py-1.5 px-4  shadow-sm duration-300 laptop:hover:shadow-lg desktop4k:py-2.5" ${primaryColor[1]} border ${primaryColor[8]}`}
        /**
         * action
         */
        onClick={handleClickOn}
      >
        {icon && icon}
        {label && <p className="secondary-font font-medium ">{label}</p>}
      </button>
    </>
  );
};

export default SecondaryButton;
