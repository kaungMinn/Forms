import { Dispatch, SetStateAction } from "react";

export const setStateObject = (
  key: string,
  value: any,
  setState: Dispatch<SetStateAction<any>>
) => {
  setState((prev: any) => ({ ...prev, [key]: value }));
};
