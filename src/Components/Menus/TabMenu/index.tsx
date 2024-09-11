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
  const selectedTextColor = textColor[1];
  const selectedBg = primaryColor[2];

  const moveGenerator = (id: number) => {
    let calculatedRem = 0;
    for (let i = 1; i < id; i++) {
      calculatedRem += 15.7;
    }
    return id === 1 ? `${0}rem` : `${calculatedRem}rem`;
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
            }}
          >
            <p className="secondary-font text-center font-semibold">
              {tab.name}
            </p>
          </div>
        );
      })}

      <div
        className={`hidden  rounded-full absolute bottom-0 left-0 h-[2px] w-20 tablet:w-60  duration-200 ${
          tabs.length > 3 ? "hidden" : "laptop:block"
        } ${selectedBg}`}
        style={{ translate: `${moveGenerator(selectedTab.id)}` }}
      />
    </div>
  );
};

export default TabMenu;
