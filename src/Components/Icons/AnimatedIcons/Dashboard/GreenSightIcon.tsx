import IconGenerator from "../IconGenerator";
import Icon from "../../../../assets/Icons/dashboard/green.json";
import { IconTypes } from "../types";

const GreenSightIcon = (props: IconTypes) => {
  const { isLoop = true, isAutoPlay = true } = props;
  return (
    <IconGenerator iconData={Icon} isLoop={isLoop} isAutoPlay={isAutoPlay} />
  );
};

export default GreenSightIcon;
