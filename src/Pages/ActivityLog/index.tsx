import { useAppSelector } from "../../Hooks/ReduxProvider";

import Hook from "./hook";
import ActivityCard from "../../Components/Activities";
import { ActivityLogTypes } from "../../DB/_types";

const ActivityLog = () => {
  const theme = useAppSelector((state) => state.theme);
  const { dashboardColor } = theme;
  const [dashboardBg, dashboardText] = dashboardColor;
  const [activities] = Hook();

  const handleFilterActivity = (activityLog: ActivityLogTypes[]) => {
    let tmp_activity_log: ActivityLogTypes[] = [];

    tmp_activity_log = activityLog.filter((activity) => {
      const { change } = activity;
      const { key } = change;

      return !key.toLowerCase().includes("server");
    });

    return tmp_activity_log;
  };

  return (
    <div className={`${dashboardBg} ${dashboardText}`}>
      <h1 className="heading-font space-y-2">
        <p>Activities</p>
        <p className="caption-font">Manage your activities</p>
      </h1>
      <div className="space-y-3 mt-5">
        {activities.length > 0 &&
          activities.map((activity) => {
            const { id, field, action, date, activityLog } = activity;

            return (
              <div key={id}>
                <ActivityCard
                  id={id}
                  field={field}
                  action={action}
                  date={date}
                  activityLog={handleFilterActivity(activityLog)}
                  theme={theme}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ActivityLog;
