import IconGenerator from "../IconGenerator";
import { IconTypes } from "../types";
import { IoIosArrowBack } from "react-icons/io";
const BackIcon = (props: IconTypes) => {
  const { size, color } = props;
  return <IconGenerator size={size} color={color} icon={<IoIosArrowBack />} />;
};

export default BackIcon;
