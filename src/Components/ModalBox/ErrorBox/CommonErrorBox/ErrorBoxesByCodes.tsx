import React from "react";

// icons
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { TbLockCancel } from "react-icons/tb";
import { HiOutlineX } from "react-icons/hi";
import { GrHostMaintenance } from "react-icons/gr";

// components
import Box from "../../Box";

import PrimaryButton from "../../../Buttons/PrimaryButton";
import { handleLogout } from "../../../../Utils/logout_helper";
import { useAppDispatch } from "../../../../Hooks/ReduxProvider";
import { ErrorBoxLayoutPropsType, ErrorResponsePropsType } from "./_types";
import { resetError } from "../../../../Store/slices/error.slice";

export const ErrorBoxLayout: React.FC<ErrorBoxLayoutPropsType> = (props) => {
  return (
    <div className="h-auto w-[14rem] space-y-5 tablet:w-[24rem]">
      <div className="space-y-3">
        <div className="flex justify-center">{props.icon}</div>
        <p className="sub-heading-font text-center font-semibold">
          {props.title}
        </p>
        <p className="body-font text-center font-medium text-default_dark">
          {props.bodyText}
        </p>
      </div>
    </div>
  );
};

const UnauthenticatedBox: React.FC<ErrorResponsePropsType> = (err) => {
  return (
    <Box open={err.isError}>
      <ErrorBoxLayout
        icon={
          <BsFillExclamationTriangleFill className="h-10 w-10 text-warning" />
        }
        title="Session Timeout!"
        bodyText={err.errorMessage}
      />
      <div className="flex justify-center">
        <div className="h-auto w-1/2">
          <PrimaryButton
            labelText="Logout"
            /**
             * action
             */
            handleClickOn={() => handleLogout()}
          />
        </div>
      </div>
    </Box>
  );
};

const PermissionDeniedBox: React.FC<ErrorResponsePropsType> = (err) => {
  return (
    <Box open={err.isError}>
      <ErrorBoxLayout
        icon={<TbLockCancel className="h-10 w-10 text-warning" />}
        title="Permission Denied!"
        bodyText={err.errorMessage}
      />
      <div className="flex justify-center">
        <div className="h-auto w-1/2">
          <PrimaryButton
            labelText="Try again"
            /**
             * action
             */
            handleClickOn={() => handleLogout()}
            // handleClickOn={() => dispatch(resetError())}
          />
        </div>
      </div>
    </Box>
  );
};

const NotFoundBox: React.FC<ErrorResponsePropsType> = (err) => {
  const dispatch = useAppDispatch();
  return (
    <Box open={err.isError}>
      <ErrorBoxLayout
        icon={<HiOutlineX className="h-10 w-10 text-warning" />}
        title="Permission Denied!"
        bodyText={err.errorMessage}
      />
      <div className="flex justify-center">
        <div className="h-auto w-1/2">
          <PrimaryButton
            labelText="Try again"
            /**
             * action
             */
            handleClickOn={() => dispatch(resetError())}
          />
        </div>
      </div>
    </Box>
  );
};

const AlreadyExistBox: React.FC<ErrorResponsePropsType> = (err) => {
  const dispatch = useAppDispatch();
  return (
    <Box open={err.isError}>
      <ErrorBoxLayout
        icon={
          <BsFillExclamationTriangleFill className="h-10 w-10 text-warning" />
        }
        title="Already Existed!"
        bodyText={err.errorMessage}
      />
      <div className="flex justify-center">
        <div className="h-auto w-1/2">
          <PrimaryButton
            labelText="Try again"
            /**
             * action
             */
            handleClickOn={() => dispatch(resetError())}
          />
        </div>
      </div>
    </Box>
  );
};

const GatewayTimeoutBox: React.FC<ErrorResponsePropsType> = (err) => {
  return (
    <Box open={err.isError}>
      <ErrorBoxLayout
        icon={<GrHostMaintenance className="h-10 w-10 text-danger" />}
        title="Already Existed!"
        bodyText="Sorry, our server is currently offline. We're working on it. Please try again later!"
      />
      <div className="flex justify-center">
        <div className="h-auto w-1/2">
          <PrimaryButton
            labelText="Logout"
            /**
             * action
             */
            handleClickOn={() => handleLogout()}
          />
        </div>
      </div>
    </Box>
  );
};

const CommonBox: React.FC<ErrorResponsePropsType> = (err) => {
  const dispatch = useAppDispatch();
  return (
    <Box open={err.isError}>
      <ErrorBoxLayout
        icon={
          <BsFillExclamationTriangleFill className="h-10 w-10 text-warning" />
        }
        title="Error"
        bodyText="Something went wrong"
      />
      <div className="flex justify-center">
        <div className="h-auto w-1/2">
          <PrimaryButton
            labelText="Try again"
            /**
             * action
             */
            handleClickOn={() => dispatch(resetError())}
          />
        </div>
      </div>
    </Box>
  );
};

export {
  UnauthenticatedBox,
  PermissionDeniedBox,
  NotFoundBox,
  AlreadyExistBox,
  GatewayTimeoutBox,
  CommonBox,
};
