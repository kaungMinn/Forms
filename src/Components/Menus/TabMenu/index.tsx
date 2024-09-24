import { IconAccessTypes } from "../../../Pages/Customer/Components/Forms/CustomerForm/validation";
import { DefaultThemeTypes } from "../../../Pages/Theme/_types";
import FailCross from "../../Icons/AnimatedIcons/Situations/FailCross";
import SuccessTick from "../../Icons/AnimatedIcons/Situations/SuccessTick";
import { TabType } from "./_types";

type TabMenuTypes = {
  tabs: TabType[];
  selectedTab: TabType;
  theme: DefaultThemeTypes;
  iconAccessCodes: IconAccessTypes;
  iconFailCodes: IconAccessTypes;
  /* 
    Actions
  */
  handleSelectTab: (tab: TabType) => void;
};
const TabMenu = (props: TabMenuTypes) => {
  const {
    tabs,
    selectedTab,
    theme,
    iconAccessCodes,
    iconFailCodes,
    /*
      Actions
    */
    handleSelectTab,
  } = props;
  const { textColor, primaryColor, alertColor } = theme;
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
      className={`relative flex flex-nowrap items-center space-x-3  border-b border-gray-300 pb-3`}
    >
      {tabs.map((tab, index) => {
        const hasAccess = iconAccessCodes[tab.id as keyof typeof iconFailCodes];
        const hasFail = iconFailCodes[tab.id as keyof typeof iconFailCodes];

        return (
          <div
            key={index}
            className={`h-auto  w-60 laptop:cursor-pointer  ${
              hasAccess
                ? `text-yellow-500`
                : hasFail
                ? `${alertColor[4]}`
                : tab.id === selectedTab.id
                ? `${selectedTextColor}`
                : ``
            }`}
            onClick={() => {
              handleSelectTab(tab);
            }}
          >
            <div className="caption-font relative laptop:secondary-font  text-center font-semibold ">
              {tab.name}

              {hasAccess && (
                <div className="w-[4rem] absolute top-4 laptop:top-3 z-50 right-[50%] -translate-x-[-50%]  ">
                  <SuccessTick isLoop={false} />
                </div>
              )}

              {hasFail && (
                <div className="w-[4rem] absolute top-0 laptop:-top-1 z-50 right-[50%] -translate-x-[-50%]  ">
                  <FailCross />
                </div>
              )}
            </div>
            <div
              className={`hidden  rounded-full absolute bottom-0 left-0 h-[2px] w-20 tablet:w-60  duration-200 ${
                tabs.length > 3 ? "hidden" : "laptop:block"
              } ${
                tab.id === selectedTab.id
                  ? hasAccess
                    ? "bg-yellow-500"
                    : hasFail
                    ? `${alertColor[3]}`
                    : `${selectedBg}`
                  : ""
              }`}
              style={{ translate: `${moveGenerator(selectedTab.id)}` }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default TabMenu;
