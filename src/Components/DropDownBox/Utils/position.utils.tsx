import { RefObject } from "react";
type DivRefType = RefObject<HTMLDivElement>;

export const hasBelowSpace = (
  dropDownRef: DivRefType,
  containerRef: DivRefType,
  hasDropDown: boolean
) => {
  let isNoSpace = false;
  if (hasDropDown && containerRef.current && dropDownRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    const dropDownHeight = dropDownRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    const spaceBelow = windowHeight - rect.bottom;
    const spaceAbove = rect.top;

    isNoSpace = dropDownHeight > spaceBelow && spaceAbove > spaceBelow;
  }

  return isNoSpace;
};

export const dropDownHeightFinder = (dropDownRef: DivRefType) => {
  let height = "4.2rem";
  if (dropDownRef.current) {
    height = `${dropDownRef.current?.offsetHeight + 45}px`;
  }
  return height;
};
