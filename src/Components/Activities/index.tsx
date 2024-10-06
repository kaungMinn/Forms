import { CiCircleChevDown } from "react-icons/ci";
import { ActivityLogTypes } from "../../DB/_types";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";
import TopNav from "./TopNav";
import BottomActivities from "./BottomActivities";
import { useEffect, useState } from "react";

type ActivityCardType = {
  id: number;
  field: string;
  date: string;
  action: string;
  activityLog: ActivityLogTypes[];
  theme: DefaultThemeTypes;
};
const ActivityCard = (props: ActivityCardType) => {
  const { id, field, date, action, activityLog, theme } = props;
  const [activityLogData, setActivityLogData] = useState<ActivityLogTypes[]>(
    []
  );

  const { generalColor } = theme;
  const { primary, secondary } = generalColor;

  const [hasDropDown, setHasDropDown] = useState(false);

  const handleDropDown = () => {
    setHasDropDown((prev) => !prev);
  };

  const slicedActivities = activityLog.slice(0, 4);

  useEffect(() => {
    if (activityLog.length > 4) {
      setActivityLogData(slicedActivities);
    } else {
      setActivityLogData(activityLog);
    }
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (hasDropDown) {
      setActivityLogData(activityLog);
    } else {
      setActivityLogData(slicedActivities);
    }
    //eslint-disable-next-line
  }, [hasDropDown, activityLog]);

  return (
    <div
      key={id}
      className={`border p-5 rounded-lg shadow-md ${primary.bg} ${primary.text}`}
    >
      <TopNav field={field} action={action} date={date} theme={theme} />

      <div className="  grid grid-cols-12 relative ">
        <div className="col-span-2" />

        {activityLog.length > 4 && (
          <div
            className={` z-10   rounded-full inline-block cursor-pointer absolute -right-5 top-20 duration-200 ${
              hasDropDown ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => handleDropDown()}
          >
            <CiCircleChevDown size={20} />
          </div>
        )}

        <div
          className={`col-span-12 laptop:col-span-10  laptop:mt-3 p-5 rounded-lg space-y-5 laptop:space-y-3 relative duration-200  ${secondary.bg} ${secondary.text}`}
        >
          {activityLogData.length > 0 &&
            activityLogData.map((activity, index) => {
              return (
                <div key={index}>
                  <BottomActivities activity={activity} theme={theme} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
