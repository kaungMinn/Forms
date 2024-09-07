// components

import { MENU_LIST } from "../../../Constants/menu_list";
import { useAppSelector } from "../../../Hooks/ReduxProvider";
import MenuList from "./MenuList";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";

const SideBar = ({
  isOpenSide,
  /**
   * action
   */
  handleClickOn,
  handleChangeOnLogoutBox,
}: {
  isOpenSide: boolean;
  /**
   * action
   */
  handleClickOn: () => void;
  handleChangeOnLogoutBox: () => void;
}) => {
  const { navColor, logo } = useAppSelector((state) => state.theme);
  const [navBg, navText] = navColor;
  return (
    <div
      className={`absolute left-0 top-0 z-20 h-screen bg-transparent duration-300   ${
        isOpenSide
          ? "w-2/3 translate-x-0 laptop:w-44"
          : "w-2/3 -translate-x-full laptop:w-16 laptop:translate-x-0"
      }`}
    >
      <div
        className={`relative left-0 top-1/2 h-[98%] w-full -translate-y-1/2 rounded-lg border  shadow-md laptop:left-2 ${navBg} ${navText}`}
      >
        <div className="h-full w-full pt-12">
          <div>
            {/* <div>
              <img src={Connector} alt="gpon" className="h-8 w-8 " />
            </div> */}
            <div
              className={`${
                !isOpenSide && "scale-0"
              } duration-300 flex items-center  justify-center`}
            >
              <div className="w-[9rem] flex items-center justify-center  ">
                {logo}
              </div>
              {/* <p className="heading-font text-center">Test</p>
              <p className="SUB-heading-font text-center  ">Management</p> */}
            </div>
          </div>

          <div className="space-y-3 px-3 pt-16">
            <MenuList
              list={MENU_LIST}
              isOpenSide={isOpenSide}
              /**
               * action
               */
              handleChangeOnLogoutBox={handleChangeOnLogoutBox}
              handleClickOn={handleClickOn}
              colors={navColor}
            />
          </div>
        </div>
        <div
          className={`${
            !isOpenSide && "rotate-180"
          } group absolute bottom-16 right-0  h-8 w-8 translate-x-3 items-center justify-center rounded-full  duration-300 laptop:flex laptop:hover:cursor-pointer`}
          onClick={handleClickOn}
        >
          <HiOutlineChevronDoubleLeft className="h-auto w-4 duration-200 group-hover:-translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
