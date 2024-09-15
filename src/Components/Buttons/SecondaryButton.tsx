import React from "react";

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
  return (
    <>
      <button
        className="space-x-2 flex h-auto w-full items-center justify-center rounded-md border border-primary bg-transparent py-1.5 px-4 text-base_light shadow-sm duration-300 laptop:hover:shadow-lg desktop4k:py-2.5"
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
