// icons
import { HiOutlineFaceFrown } from "react-icons/hi2";

const NoDataFound = () => {
  return (
    <>
      <HiOutlineFaceFrown className="mx-auto h-auto w-16 text-slate-400" />
      <p className="primary-font text-center font-medium text-slate-400">
        No Data Found!
      </p>
    </>
  );
};

export default NoDataFound;
