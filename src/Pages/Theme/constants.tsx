import Mukta from "../../assets/fonts/Mukta-Regular.ttf";
import Tektur from "../../assets/fonts/Lato-Regular.ttf";

import { SiGoogleearth } from "react-icons/si";
import { DefaultThemeTypes } from "./_types";
import { HiColorSwatch } from "react-icons/hi";
export const DEFAULT_THEMES: DefaultThemeTypes[] = [
  {
    id: 1,
    logo: <SiGoogleearth size={60} />,
    detailLogo: <SiGoogleearth size={60} />,
    name: "Default Theme",
    primaryColor: ["bg-primary", "text-default"],
    secondaryColor: ["bg-secondary", "text-default"],
    dashboardColor: ["bg-default", "text-black", "bg-primary", "text-default"],
    navColor: [
      "bg-default",
      "text-black",
      "bg-primary",
      "text-default",
      "laptop:hover:bg-default_light",
      "hover:text-black",
    ],
    description: "Welcome to the default theme",
    font: Mukta,
    websiteLink: "www.google.com",
  },
  {
    id: 2,
    logo: <HiColorSwatch size={60} />,
    detailLogo: <HiColorSwatch size={60} />,
    name: "Color Theme",
    primaryColor: ["bg-primary", "text-default"],
    secondaryColor: ["bg-secondary", "text-default"],
    dashboardColor: ["bg-primary_light", "text-black"],
    navColor: [
      "bg-primary",
      "text-default ",
      "bg-default",
      "text-black",
      "laptop:hover:bg-default_light",
      "hover:text-black",
    ],
    description: "Welcome to the default theme",
    font: Tektur,
    websiteLink: "www.google.com",
  },
];
