import React from "react";
import { TbSettings } from "react-icons/tb";
import { useAppSelector } from "../../Hooks/ReduxProvider";

interface PrimaryButtonPropType {
  label?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  /**
   * action
   */
  handleClickOn?: React.MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton: React.FC<PrimaryButtonPropType> = ({
  label,
  isLoading,
  icon,
  isDisabled,
  /**
   * action
   */
  handleClickOn,
}: PrimaryButtonPropType) => {
  const theme = useAppSelector((state) => state.theme);
  const { primaryColor } = theme;

  return (
    <>
      <button
        className={`desktop4k:py-2.5 flex h-auto w-full items-center justify-center space-x-2 rounded-md border  px-4 py-1.5 text-default duration-300 hover:shadow-xl  ${primaryColor[2]} ${primaryColor[3]} ${primaryColor[6]} ${primaryColor[7]} ${primaryColor[8]}`}
        disabled={isLoading || isDisabled}
        /**
         * action
         */
        onClick={handleClickOn}
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-1">
            <TbSettings className="h-auto w-6 animate-spin" />
            <p className="body-font font-medium ">Loading ... </p>
          </div>
        ) : (
          <>
            {icon && icon}
            {label && <p className="secondary-font font-medium ">{label}</p>}
          </>
        )}
      </button>
    </>
  );
};

export default PrimaryButton;
