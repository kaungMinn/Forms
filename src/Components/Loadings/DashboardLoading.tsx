import LoadingIcon from "../Icons/AnimatedIcons/Data/LoadingIcon";

const DashboardLoading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[30rem]">
        <LoadingIcon />
      </div>
    </div>
  );
};

export default DashboardLoading;
