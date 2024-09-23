import LoadingIcon from "../Icons/AnimatedIcons/Data/LoadingIcon";

const DataLoading = () => {
  return (
    <div className="fixed z-30 top-0 left-0 h-full w-full flex items-center justify-center ">
      {/* BackDrop */}
      <div className={`fixed inset-0  bg-black/20 backdrop-blur-sm `} />
      <div className="w-[30rem]">
        <LoadingIcon />
      </div>
    </div>
  );
};

export default DataLoading;
