import IconGenerator from "../IconGenerator";
import { IconTypes } from "../types";
import Icon from "../../../../assets/Icons/situations/successTick.json";
const SuccessTick = (props: IconTypes) => {
  const { isLoop = true, isAutoPlay = true } = props;
  return (
    <IconGenerator iconData={Icon} isLoop={isLoop} isAutoPlay={isAutoPlay} />
  );
};

export default SuccessTick;
