import {
  CUSTOMER_CREATE_ROUTE,
  CUSTOMER_LIST_ROUTE,
  CUSTOMER_UPDATE_ROUTE,
  NOT_MATCH_ROUTE,
  THEME_ROUTE,
} from "./route_paths";
import {
  CustomerCreate,
  CustomerList,
  CustomerUpdate,
  NotMatch,
  Theme,
} from "./route_lazy";
import Test from "../Pages/Test";

export const PUBLIC_ROUTE = [{ path: NOT_MATCH_ROUTE, element: <NotMatch /> }];

export const PROTECTED_ROUTE_LIST = [
  {
    path: CUSTOMER_LIST_ROUTE,
    element: <CustomerList />,
  },
  {
    path: CUSTOMER_CREATE_ROUTE,
    element: <CustomerCreate />,
  },
  {
    path: CUSTOMER_UPDATE_ROUTE,
    element: <CustomerUpdate />,
  },
  {
    path: THEME_ROUTE,
    element: <Theme />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];
