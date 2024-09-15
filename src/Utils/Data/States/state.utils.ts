import { Dispatch, SetStateAction } from "react";

export const modifyState = <T>(
  key: string,
  value: T[keyof T],
  setState: Dispatch<SetStateAction<T>>
) => {
  setState((prev) => ({ ...prev, [key as keyof T]: value }));
};
