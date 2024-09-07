import { lazy } from "react";

export const Theme = lazy(() => import("../Pages/Theme"));

export const CustomerList = lazy(() => import("../Pages/Customer/List"));
export const CustomerCreate = lazy(() => import("../Pages/Customer/Create"));
export const CustomerUpdate = lazy(() => import("../Pages/Customer/Update"));

export const NotMatch = lazy(() => import("../Pages/NotMatch"));
