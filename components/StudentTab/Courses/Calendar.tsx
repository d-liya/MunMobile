import React from "react";
import { Calendar as DefaultCalendar, CalendarList, Agenda } from "react-native-calendars";
import { View } from "react-native-ui-lib";

export default function Calendar() {
  return (
    <DefaultCalendar
      markedDates={{
        "2021-05-15": { textColor: "green" },
        "2021-05-22": { startingDay: true, color: "green" },
        "2021-05-23": { selected: true, endingDay: true, color: "green", textColor: "gray" },
        "2021-05-04": { disabled: true, startingDay: true, color: "green", endingDay: true },
      }}
      // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
      markingType={"period"}
    />
  );
}
