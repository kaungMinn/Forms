import { Outlet } from "react-router-dom";
import LogoutProvider from "../../Hooks/LogoutProvider";
import SideBarProvider from "../../Hooks/SideBarProvider";

import SideBar from "./SideBar";
import AskBox from "../../Components/ModalBox/AskBox";

const SideBarLayout = () => {
  const { isOpenSideBar, handleChangeOnSideBar } = SideBarProvider();
  const { isOpenLogoutBox, handleChangeOnLogout, handleChangeOnBox } =
    LogoutProvider();
  return (
    <>
      <div className="relative">
        <SideBar
          isOpenSide={isOpenSideBar}
          /**
           * action
           */
          handleClickOn={handleChangeOnSideBar}
          handleChangeOnLogoutBox={handleChangeOnBox}
        />

        <div
          className={`h-screen w-full duration-100 ${
            isOpenSideBar ? "laptop:pl-44" : "laptop:pl-16"
          } `}
        >
          <div
            className={`fixed inset-0 z-10 duration-200 laptop:hidden ${
              isOpenSideBar
                ? "bg-black/30 backdrop-blur-sm"
                : "pointer-events-none"
            }`}
          />
          <Outlet />
        </div>
      </div>
      <AskBox
        isOpen={isOpenLogoutBox}
        titleLabel="Logout"
        bodyText="Are you sure to logout?"
        btnCancelLabel="Cancel"
        btnOkLabel="Confirm"
        /**
         * action
         */
        clickOnCancel={handleChangeOnBox}
        clickOnOk={handleChangeOnLogout}
      />
    </>
  );
};

export default SideBarLayout;
