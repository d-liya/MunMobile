import React from "react";
import { Agenda } from "react-native-calendars";
import { View } from "react-native-ui-lib";

export default function Calendar() {
  return (
    <Agenda
      items={{
        "2021-05-18": [{ name: "Today" }],
      }}
      selected={"2021-05-18"}

      // renderItem={(item,firstItemInDay) => <View/>}
    />
  );
}
