import IconGenerator from "../IconGenerator";
import { IconTypes } from "../types";
import Icon from "../../../../assets/Icons/dashboard/purpleWorld.json";

const PurpleWorldIcon = (props: IconTypes) => {
  const { isLoop = true, isAutoPlay = true } = props;
  return (
    <IconGenerator iconData={Icon} isLoop={isLoop} isAutoPlay={isAutoPlay} />
  );
};

export default PurpleWorldIcon;
