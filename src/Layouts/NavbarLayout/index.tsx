import React from "react";

//icons
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

type NavBarProps = {
  isOpenSideBar: boolean;
  handleChangeOnSideBar: () => void;
};

const NavBarLayout: React.FC<NavBarProps> = ({
  isOpenSideBar,
  /**
   * action
   */
  handleChangeOnSideBar,
}) => {
  return (
    <div className="fixed right-0 top-0 z-20 flex h-auto w-full border-b bg-default px-8 py-2 shadow-md duration-200 laptop:hidden laptop:py-1 justify-end">
      {/* <div>{icon}</div> */}
      <div className="flex items-center  space-x-4">
        <div
          className="h-auto w-5 text-base_light laptop:hidden"
          /**
           * action
           */
          onClick={handleChangeOnSideBar}
        >
          {isOpenSideBar ? (
            <RxCross2 className="h-full w-full" />
          ) : (
            <RxHamburgerMenu className="h-full w-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarLayout;
