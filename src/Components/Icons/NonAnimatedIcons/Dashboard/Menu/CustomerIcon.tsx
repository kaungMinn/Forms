import IconGenerator from "../../IconGenerator";
import { IconTypes } from "../../types";
import { FaRegUser } from "react-icons/fa";

const CustomerIcon = (props: IconTypes) => {
  const { size, color } = props;
  return <IconGenerator size={size} color={color} icon={<FaRegUser />} />;
};

export default CustomerIcon;
