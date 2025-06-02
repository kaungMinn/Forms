import {
  ACTIVITY_ROUTE,
  CUSTOMER_CREATE_ROUTE,
  CUSTOMER_LIST_ROUTE,
  CUSTOMER_UPDATE_ROUTE,
  DASHBOARD_ROUTE,
  NOT_MATCH_ROUTE,
  THEME_ROUTE,
} from "./route_paths";
import {
  ActivityLog,
  CustomerCreate,
  CustomerList,
  CustomerUpdate,
  Dashboard,
  NotMatch,
  Theme,
} from "./route_lazy";
import Test from "../Pages/Test";

export const PUBLIC_ROUTE = [{ path: NOT_MATCH_ROUTE, element: <NotMatch /> }];

export const PROTECTED_ROUTE_LIST = [
  {
    path: DASHBOARD_ROUTE,
    element: <Dashboard />
  },
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
    path: ACTIVITY_ROUTE,
    element: <ActivityLog />,
  },
  {
    path: "/test",
    element: <Test />,
  },
];
