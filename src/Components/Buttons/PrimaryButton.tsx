import React from "react";
import { TbSettings } from "react-icons/tb";

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
  return (
    <>
      <button
        className={`desktop4k:py-2.5 flex h-auto w-full items-center justify-center space-x-2 rounded-md border border-primary bg-primary px-4 py-1.5 text-default duration-300 hover:shadow-xl ${
          !isLoading && "laptop:hover:bg-transparent"
        } laptop:hover:text-primary`}
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
