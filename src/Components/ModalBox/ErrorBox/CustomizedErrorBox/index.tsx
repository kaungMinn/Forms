import React from "react";

// icons
import { RxCross2 } from "react-icons/rx";

// components
import { CustomizedErrorBoxPropsType } from "./__type";
import Box from "Components/ModalBox/Box";
import { ErrorBoxLayout } from "../CommonErrorBox/ErrorBoxesByCode";
import SecondaryButton from "Components/Buttons/SecondaryButton";
import PrimaryButton from "Components/Buttons/PrimaryButton";

const CustomizedErrorBox: React.FC<CustomizedErrorBoxPropsType> = (props) => {
  return (
    <Box open={props.isOpen}>
      <ErrorBoxLayout
        icon={<RxCross2 className="h-10 w-10 text-warning" />}
        title={props.titleLabel}
        bodyText={props.bodyText}
      />
      <div className="grid grid-cols-2 space-x-2">
        <div className="col-span-1">
          <SecondaryButton
            labelText={props.btnCancelLabel}
            /**
             * action
             */
            handleClickOn={props.clickOnCancel}
          />
        </div>
        <div className="col-span-1">
          <PrimaryButton
            labelText={props.btnOkLabel}
            /**
             * action
             */
            handleClickOn={props.clickOnOk}
          />
        </div>
      </div>
    </Box>
  );
};

export default CustomizedErrorBox;
