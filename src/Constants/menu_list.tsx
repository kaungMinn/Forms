import { MENU_LIST_TYPE } from "../Layouts/SidebarLayout/type";
import {
  CUSTOMER_CREATE_ROUTE,
  CUSTOMER_LIST_ROUTE,
  THEME_ROUTE,
} from "./route_paths";

import { IoIosColorFilter } from "react-icons/io";
import { CiUser } from "react-icons/ci";
export const MENU_LIST: MENU_LIST_TYPE[] = [
  {
    id: 1,
    name: "List",
    path: "",
    icon: <CiUser />,
    expand: false,
    is_sub_menu: true,
    sub_menu: [
      {
        id: 1,
        name: "Customers",
        path: CUSTOMER_LIST_ROUTE,
        icon: <></>,
      },
      {
        id: 2,
        name: "Create",
        path: CUSTOMER_CREATE_ROUTE,
        icon: <></>,
      },
    ],
  },
  {
    id: 2,
    name: "Theme",
    path: THEME_ROUTE,
    icon: <IoIosColorFilter size={15} />,
    expand: false,
    is_sub_menu: false,
    sub_menu: [],
  },
];
