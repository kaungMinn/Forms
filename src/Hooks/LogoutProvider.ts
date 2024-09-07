import { useState } from "react";

// components

export default function LogoutProvider() {
  const [isOpenLogoutBox, setIsOpenLogoutBox] = useState<boolean>(false);

  const handleChangeOnBox = (): void => {
    setIsOpenLogoutBox((prev) => !prev);
  };

  const handleChangeOnLogout = (): void => {
    // handleLogout();
  };

  return {
    isOpenLogoutBox,
    /**
     * action
     */
    handleChangeOnBox,
    handleChangeOnLogout,
  };
}
