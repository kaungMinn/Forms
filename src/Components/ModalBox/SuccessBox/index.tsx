import React from "react";

// icons
import { BsCheck2All } from "react-icons/bs";

// components
import Box from "../Box";
import PrimaryButton from "../../Buttons/PrimaryButton";

interface SuccessBoxPropType {
  isOpen: boolean;
  titleLabel?: string;
  bodyText: string;
  btnLabel: string;
  /**
   * action
   */
  clickOn?: () => void;
}

const SuccessBox: React.FC<SuccessBoxPropType> = ({
  isOpen,
  titleLabel,
  bodyText,
  btnLabel,
  /**
   * action
   */
  clickOn,
}) => {
  return (
    <Box open={isOpen}>
      <div className="h-auto w-[14rem] space-y-5 tablet:w-[25rem]">
        <div className="flex justify-center">
          <div className="group flex h-16 w-16 items-center justify-center rounded-full border bg-default_light shadow-lg shadow-primary_light">
            <BsCheck2All className="mx-auto h-auto w-7 text-success" />
          </div>
        </div>
        <div className="space-y-2">
          <p className="sub-heading-font text-center font-medium text-success">
            {titleLabel}
          </p>
          <p className="body-font text-center text-base_light">{bodyText}</p>
        </div>
        <div className="flex justify-center">
          <div className="h-auto w-36">
            <PrimaryButton
              label={btnLabel}
              /**
               * action
               */
              handleClickOn={clickOn}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SuccessBox;
