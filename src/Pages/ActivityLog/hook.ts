import { useEffect, useState } from "react";
import { Activity } from "../../DB/_types";
import { db } from "../../DB/db";

type HookReturnType = [acitivites: Activity[]];

const Hook = (): HookReturnType => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const getActivity = async () => {
    try {
      const response = (await db.activities.toArray()).reverse();
      setActivities(response);
    } catch (error) {
      console.error(error);
    }
  };

  //LIFE-CIRCLES
  useEffect(() => {
    getActivity();
  }, []);
  return [activities];
};

export default Hook;
