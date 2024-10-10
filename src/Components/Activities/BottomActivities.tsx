import { ActivityLogTypes } from "../../DB/_types";
import { DefaultThemeTypes } from "../../Pages/Theme/_types";
import { camelCaseToName } from "../../Utils/Data/string.utils";
import { humanReadableDate } from "../../Utils/Date/date.utils";
import PrimaryBadge from "../Badge/PrimaryBadge";

type BottomActivitesType = {
  activity: ActivityLogTypes;
  theme: DefaultThemeTypes;
};

const BottomActivities = (props: BottomActivitesType) => {
  const { activity, theme } = props;
  if (!activity.change) return;
  const { key, from, to } = activity.change;

  const { statusColor } = theme;
  const { danger, success, disabled } = statusColor;

  const handleHumanReadable = (value: string) => {
    if (key === "serviceStartDate" || key === "serviceEndDate") {
      return humanReadableDate(value);
    }

    return value;
  };

  return (
    <div
      className={`laptop:list-item laptop:list-disc rounded-md laptop:px-5 laptop:mx-5  `}
    >
      <div className=" space-y-1 laptop:space-y-0 laptop:flex gap-5 body-font ">
        <div className="sub-heading-font laptop:body-font">
          {camelCaseToName(key)}
        </div>

        <div className="flex gap-3">
          {from && (
            <div className=" laptop:space-x-2 laptop:flex">
              <PrimaryBadge
                label={to ? "From" : "Removed"}
                theme={theme}
                bgColor={to ? disabled.bg : danger.bg}
                textColor={to ? disabled.text : danger.text}
                height="h-4"
                width="w-15"
              />

              <span className="inline-block">{handleHumanReadable(from)}</span>
            </div>
          )}
          {to && (
            <div className="laptop:space-x-2 laptop:flex ">
              <PrimaryBadge
                label={from ? "To" : "Added"}
                theme={theme}
                height="h-4"
                width="w-15"
                bgColor={success.bg}
                textColor={success.text}
              />

              <span className="inline-block">{handleHumanReadable(to)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomActivities;
