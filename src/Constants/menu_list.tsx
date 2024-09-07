import { MENU_LIST_TYPE } from "../Layouts/SidebarLayout/type";
import { CUSTOMER_LIST_ROUTE, THEME_ROUTE } from "./route_paths";
import { CiCircleList } from "react-icons/ci";
import { IoIosColorFilter } from "react-icons/io";
export const MENU_LIST: MENU_LIST_TYPE[] = [
  {
    id: 1,
    name: "List",
    path: "",
    icon: <CiCircleList />,
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
        name: "Packages",
        path: "/packages",
        icon: <></>,
      },

      {
        id: 5,
        name: "Finance",
        path: "/finance",
        icon: <></>,
      },
      {
        id: 6,
        name: "Messages",
        path: "/message",
        icon: <></>,
      },
    ],
  },
  {
    id: 2,
    name: "Theme",
    path: THEME_ROUTE,
    icon: <IoIosColorFilter />,
    expand: false,
    is_sub_menu: false,
    sub_menu: [],
  },
];
