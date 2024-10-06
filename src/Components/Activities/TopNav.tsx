import { DefaultThemeTypes } from "../../Pages/Theme/_types";
import { humanReadableDate } from "../../Utils/Date/date.utils";
import PrimaryBadge from "../Badge/PrimaryBadge";

type TopNavType = {
  field: string;
  action: string;
  date: string;
  theme: DefaultThemeTypes;
};
const TopNav = (props: TopNavType) => {
  const { field, action, date, theme } = props;
  const { actionColor } = theme;
  const { createColor, updateColor, deleteColor } = actionColor;

  const actionColorStructure = {
    create: createColor,
    update: updateColor,
    delete: deleteColor,
  };

  const { bg, text } =
    actionColorStructure[
      field.toLowerCase() as keyof typeof actionColorStructure
    ];

  const [actionTitle, actionName] = action.split(",");

  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-12 laptop:col-span-2   ">
        <div className="w-20 ">
          <PrimaryBadge
            theme={theme}
            label={field}
            height="h-6"
            bgColor={bg}
            textColor={text}
          />
        </div>
      </div>

      <div className="col-span-12 laptop:col-span-5  body-font mt-5 laptop:mt-0">
        <div className="flex items-center gap-3">
          <p>{actionTitle}</p>

          <PrimaryBadge
            label={actionName}
            theme={theme}
            height="h-6"
            bgColor={bg}
            textColor={text}
          />
        </div>
      </div>

      <p className="body-font col-span-12 laptop:col-span-5 flex items-center laptop:justify-end mt-1 laptop:mt-0">
        {humanReadableDate(date)}
      </p>
    </div>
  );
};

export default TopNav;
