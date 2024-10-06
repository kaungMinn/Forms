import { GrDashboard } from "react-icons/gr";
import { MENU_LIST_TYPE } from "../Layouts/SidebarLayout/type";
import {
  ACTIVITY_ROUTE,
  CUSTOMER_CREATE_ROUTE,
  CUSTOMER_LIST_ROUTE,
  THEME_ROUTE,
} from "./route_paths";

import { CiSettings, CiUser } from "react-icons/ci";

import { RxDashboard } from "react-icons/rx";
export const MENU_LIST: MENU_LIST_TYPE[] = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: <RxDashboard size={15} />,
    expand: false,
    is_sub_menu: false,
    sub_menu: [],
  },

  {
    id: 2,
    name: "Customer",
    path: "",
    icon: <CiUser />,
    expand: false,
    is_sub_menu: true,
    sub_menu: [
      {
        id: 1,
        name: "List",
        path: CUSTOMER_LIST_ROUTE,
        icon: <></>,
      },
      {
        id: 2,
        name: "Create",
        path: CUSTOMER_CREATE_ROUTE,
        icon: <></>,
      },
      // {
      //   id: 3,
      //   name: "Update",
      //   path: CUSTOMER_UPDATE_ROUTE,
      //   icon: <></>,
      // },
    ],
  },
  {
    id: 3,
    name: "Settings",
    path: "/",
    icon: <CiSettings size={15} />,
    expand: false,
    is_sub_menu: true,
    sub_menu: [
      {
        id: 1,
        name: "Themes",
        path: THEME_ROUTE,
        icon: <></>,
      },
      {
        id: 2,
        name: "Activites",
        path: ACTIVITY_ROUTE,
        icon: <></>,
      },
    ],
  },
];
