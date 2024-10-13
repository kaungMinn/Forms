import { useAppSelector } from "../../Hooks/ReduxProvider";
import LoadingIcon from "../Icons/AnimatedIcons/Data/LoadingIcon";

const DashboardLoading = () => {
  const theme = useAppSelector((state) => state.theme);

  const primaryColor = theme.primaryColor;

  return (
    <div
      className={`h-full w-full flex items-center justify-center ${primaryColor[0]}`}
    >
      <div className="w-[30rem]">
        <LoadingIcon />
      </div>
    </div>
  );
};

export default DashboardLoading;
