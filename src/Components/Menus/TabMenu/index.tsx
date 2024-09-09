import { useState } from "react";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import { TabType } from "./_types";

type TabMenuTypes = {
  tabs: TabType[];
  selectedTab: TabType;
  theme: DefaultThemeTypes;
  /* 
    Actions
  */
  handleSelectTab: (tab: TabType) => void;
};
const TabMenu = (props: TabMenuTypes) => {
  const { tabs, selectedTab, theme, handleSelectTab } = props;
  const { textColor, primaryColor } = theme;
  const [translateX, setTranslateX] = useState("translate-x-0");
  const [regularTextColor, selectedTextColor] = textColor;
  const [primaryBg, primaryText, selectedBg, selectedText] = primaryColor;

  const moveGenerator = (id: number) => {
    if (id === 1) {
      return setTranslateX("translate-x-0");
    }
    let calculatedRem = 0;
    for (let i = 1; i < id; i++) {
      calculatedRem += 15.7;
    }

    setTranslateX(`translate-x-[${calculatedRem}rem]`);

    return;
  };

  return (
    <div
      className={`relative  items-center space-x-3 overflow-x-auto border-b border-gray-300 pb-3 ${
        tabs.length > 4
          ? `grid grid-cols-4 gap-y-4 py-4 rounded-lg border`
          : "flex flex-nowrap"
      }`}
    >
      {tabs.map((tab, index) => {
        return (
          <div
            key={index}
            className={`h-auto  w-60 laptop:cursor-pointer  ${
              tab.id === selectedTab.id && `${selectedTextColor}`
            }`}
            onClick={() => {
              handleSelectTab(tab);
              moveGenerator(tab.id);
            }}
          >
            <p className="secondary-font text-center font-semibold">
              {tab.name}
            </p>

            <div
              className={`hidden  rounded-full absolute bottom-0 left-0 h-[2px] w-20 tablet:w-60  duration-200 ${
                tabs.length > 3 ? "hidden" : "laptop:block"
              } ${selectedBg} ${translateX}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TabMenu;
