import Icon from "../../../../assets/Icons/dashboard/silverWorld.json";
import IconGenerator from "../IconGenerator";
import { IconTypes } from "../types";
const SilverWorldIcon = (props: IconTypes) => {
  const { isLoop = true, isAutoPlay = true } = props;
  return (
    <IconGenerator iconData={Icon} isLoop={isLoop} isAutoPlay={isAutoPlay} />
  );
};

export default SilverWorldIcon;
