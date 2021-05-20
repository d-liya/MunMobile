import React from "react";
import { Agenda as DefaultAgenda } from "react-native-calendars";
import { View } from "react-native-ui-lib";

export default function Agenda() {
  return (
    <DefaultAgenda
      items={{
        "2021-05-18": [{ name: "Today" }],
      }}
      selected={"2021-05-18"}

      // renderItem={(item,firstItemInDay) => <View/>}
    />
  );
}
