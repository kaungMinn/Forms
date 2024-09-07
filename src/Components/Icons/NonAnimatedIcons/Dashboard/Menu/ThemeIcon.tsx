import IconGenerator from "../../IconGenerator";
import { IconTypes } from "../../types";
import { TbColorSwatch } from "react-icons/tb";
const ThemeIcon = (props: IconTypes) => {
  const { size, color } = props;
  return <IconGenerator size={size} color={color} icon={<TbColorSwatch />} />;
};

export default ThemeIcon;
