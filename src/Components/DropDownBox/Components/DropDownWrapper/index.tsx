import { ReactNode, RefObject } from "react";

const DropDownWrapper = ({
  hasDropDown,
  dropDownRef,
  isNoSpace,
  dropDownHeight,
  children,
}: {
  hasDropDown: boolean;
  dropDownRef: RefObject<HTMLDivElement>;
  isNoSpace: boolean;
  dropDownHeight: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={` absolute w-full z-50  ${
        hasDropDown ? "scale-1" : "scale-0"
      } duration-150`}
      ref={dropDownRef}
      style={
        hasDropDown
          ? isNoSpace
            ? {
                transform: `translateY(-${dropDownHeight})`,
              }
            : {
                transform: `translateY(0.5rem)`,
              }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default DropDownWrapper;
