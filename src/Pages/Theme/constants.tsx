import Mukta from "../../assets/fonts/Mukta-Regular.ttf";

import { SiGoogleearth } from "react-icons/si";
import { DefaultThemeTypes } from "./_types";
import { HiColorSwatch } from "react-icons/hi";
export const DEFAULT_THEMES: DefaultThemeTypes[] = [
  {
    id: 1,
    logo: <SiGoogleearth size={60} />,
    detailLogo: <SiGoogleearth size={60} />,
    name: "Default Theme",
    primaryColor: [
      "bg-default",
      "text-base_light",
      "bg-primary",
      "text-default",
      "laptop:hover:bg-primary",
      "laptop:hover:text-default",
    ],
    secondaryColor: ["bg-slate-100", "text-base_light"],
    dashboardColor: [
      "bg-default_light",
      "text-black",
      "bg-primary_light",
      "text-default",
    ],
    navColor: [
      "bg-default",
      "text-black",
      "bg-primary",
      "text-default",
      "laptop:hover:bg-default_light",
      "hover:text-black",
    ],
    tableColor: [
      "odd:bg-default",
      "even:bg-default_light",
      "laptop:hover:bg-primary",
    ],
    inputColor: [
      "placeholder:text-slate-400",
      " text-base_light",
      "focus:border-primary",
      "focus:shadow-primary",
      "border:default_dark",
      "shadow-sm shadow-primary",
    ],
    textColor: ["text-base_light", "text-primary"],

    description: "Welcome to the default theme",
    font: Mukta,
    websiteLink: "www.google.com",
  },
  {
    id: 2,
    logo: <HiColorSwatch size={60} />,
    detailLogo: <HiColorSwatch size={60} />,
    name: "Color Theme",
    primaryColor: [
      "bg-primary",
      "text-default",
      "bg-primary_light",
      "text-primary",
      "laptop:hover:bg-default_light",
      "laptop:hover:text-primary",
    ],
    secondaryColor: ["bg-purple-600", "text-default"],
    dashboardColor: [
      "bg-primary_dark",
      "text-default_light",
      "bg-default",
      "text-black",
    ],
    navColor: [
      "bg-primary",
      "text-default ",
      "bg-default",
      "text-black",
      "laptop:hover:bg-default_light",
      "hover:text-black",
    ],
    tableColor: [
      "odd:bg-default_light",
      "even:bg-primary_light",
      "laptop:hover:bg-primary_dark",
    ],
    inputColor: [
      "placeholder:text-default_light",
      "text-default ",
      "focus:border-default_light",
      "focus:shadow-default_light",
      "border:default_light",
      "shadow shadow-default",
    ],
    textColor: ["text-default_light", "text-default"],

    description: "Welcome to the default theme",
    font: Mukta,
    websiteLink: "www.google.com",
  },
];
