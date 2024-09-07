import React from "react";

const OUTLINE_TYPE = "outline";
const BLOCK_TYPE = "block";

interface TertiaryButtonPropType {
  icon: React.ReactNode;
  type: string;
  /**
   * action
   */
  handleClickOn?: React.MouseEventHandler<HTMLButtonElement>;
}

const TertiaryButton: React.FC<TertiaryButtonPropType> = ({
  icon,
  type,
  /**
   * action
   */
  handleClickOn,
}: TertiaryButtonPropType) => {
  return (
    <>
      <button
        type="button"
        className={`flex h-9 w-9 items-center justify-center rounded-full border ${
          type === BLOCK_TYPE && "border-primary_dark bg-primary text-default"
        } ${
          type === OUTLINE_TYPE && "border-primary bg-transparent text-primary "
        }  shadow-sm duration-200 laptop:hover:shadow-md laptop:hover:shadow-primary`}
        /**
         * action
         */
        onClick={handleClickOn}
      >
        {icon}
      </button>
    </>
  );
};

export default TertiaryButton;
