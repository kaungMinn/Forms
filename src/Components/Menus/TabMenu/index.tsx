import { AccessCodeTypes } from "../../../Pages/Customer/Components/Forms/CustomerForm/validation";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import SuccessTick from "../../Icons/AnimatedIcons/Situations/SuccessTick";
import { TabType } from "./_types";

type TabMenuTypes = {
  tabs: TabType[];
  selectedTab: TabType;
  theme: DefaultThemeTypes;
  iconAccessCodes: AccessCodeTypes;
  /* 
    Actions
  */
  handleSelectTab: (tab: TabType) => void;
};
const TabMenu = (props: TabMenuTypes) => {
  const { tabs, selectedTab, theme, iconAccessCodes, handleSelectTab } = props;
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

  const iconAccesses = {
    1: iconAccessCodes.step1,
    2: iconAccessCodes.step2,
    3: iconAccessCodes.step3,
  };

  return (
    <div
      className={`relative flex flex-nowrap items-center space-x-3  border-b border-gray-300 pb-3`}
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
            <div className="caption-font relative laptop:secondary-font  text-center font-semibold ">
              {tab.name}

              {iconAccesses[tab.id as keyof typeof iconAccesses] && (
                <div className="w-[4rem] absolute top-3 z-50 right-[50%] -translate-x-[-50%]  ">
                  <SuccessTick isLoop={false} />
                </div>
              )}
            </div>
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
