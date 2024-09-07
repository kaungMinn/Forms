import { IconGeneratorTypes } from "./types";

const IconGenerator = ({ size, color, icon }: IconGeneratorTypes) => {
  return <div className={`${size && size} ${color && color}`}>{icon}</div>;
};

export default IconGenerator;
