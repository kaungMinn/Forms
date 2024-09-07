import IconGenerator from "../IconGenerator";
import Icon from "../../../../assets/Icons/dashboard/notFound.json";
import { IconTypes } from "../types";

const LostPageIcon = (props: IconTypes) => {
  const { isLoop = true, isAutoPlay = true } = props;
  return (
    <IconGenerator iconData={Icon} isLoop={isLoop} isAutoPlay={isAutoPlay} />
  );
};

export default LostPageIcon;
