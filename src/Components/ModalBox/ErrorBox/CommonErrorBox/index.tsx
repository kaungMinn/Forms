import React, { useMemo } from "react";
// components
import {
  AlreadyExistBox,
  CommonBox,
  GatewayTimeoutBox,
  NotFoundBox,
  PermissionDeniedBox,
  UnauthenticatedBox,
} from "./ErrorBoxesByCode";
import { useAppSelector } from "Hooks/ReduxProvider";

const UNAUTHENTICATED = 401;
const PERMISSION_DENIED = 403;
const NOT_FOUND = 404;
const ALREADY_EXIST = 409;
const GATEWAY_TIMEOUT = 504;

const checkBoxByStatus = (err: {
  isError: boolean;
  statusCode: number;
  errorMessage: string;
}) => {
  if (err.isError) {
    switch (err?.statusCode) {
      case UNAUTHENTICATED:
        return <UnauthenticatedBox {...err} />;

      case PERMISSION_DENIED:
        return <PermissionDeniedBox {...err} />;

      case NOT_FOUND:
        return <NotFoundBox {...err} />;

      case ALREADY_EXIST:
        return <AlreadyExistBox {...err} />;

      case GATEWAY_TIMEOUT:
        return <GatewayTimeoutBox {...err} />;

      default:
        return <CommonBox {...err} />;
    }
  }
};

export const CommonErrorBox = ({ children }: { children: React.ReactNode }) => {
  const err = useAppSelector((state) => state.error);

  const ErrorBoxComponent = useMemo(() => checkBoxByStatus(err), [err]);

  return (
    <React.Fragment>
      {ErrorBoxComponent}
      {children}
    </React.Fragment>
  );
};
