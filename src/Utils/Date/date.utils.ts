import { DURATION_MEASURED_TYPE_VALUES } from "../../Constants/General/date.constants";

export const inputAcceptableDate = (dateValue: Date) => {
  if (!dateValue) return "";
  const date = new Date(dateValue);

  // Extract and format the components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  // Combine them into the desired format
  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;

  return formattedDateTime;
};

export const endDateCreator = (
  durationType: string,
  durationNumber: string,
  startDate: string
) => {
  const dt = new Date(startDate);

  switch (durationType) {
    case DURATION_MEASURED_TYPE_VALUES.MINUTE:
      dt.setMinutes(dt.getMinutes() + parseInt(durationNumber));
      break;

    case DURATION_MEASURED_TYPE_VALUES.HOUR:
      dt.setHours(dt.getHours() + parseInt(durationNumber));
      break;

    case DURATION_MEASURED_TYPE_VALUES.DAY:
      dt.setDate(dt.getDate() + parseInt(durationNumber));
      break;

    case DURATION_MEASURED_TYPE_VALUES.MONTH:
      dt.setDate(
        new Date(
          dt.setMonth(dt.getMonth() + parseInt(durationNumber))
        ).getDate() - 1
      );
      break;
  }

  return dt;
};
