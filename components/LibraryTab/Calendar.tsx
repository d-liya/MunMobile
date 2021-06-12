import React from "react";
import { View, Text, ThemeProps } from "../Themed";
import { Calendar as DefaulltCalendar } from "react-native-calendars";
import { useColorScheme } from "../../hooks";
import Colors, { red } from "../../constants/Colors";

export default function Calendar() {
  const theme = useColorScheme();
  return theme === "light" ? (
    <CalendarComponent theme={"light"} />
  ) : (
    <View>
      <CalendarComponent theme={"dark"} />
    </View>
  );
}

const CalendarComponent = ({ theme }: { theme: "light" | "dark" }) => (
  <DefaulltCalendar
    current={Date.now()}
    minDate={Date.now()}
    theme={{
      backgroundColor: Colors[theme].tint,
      calendarBackground: Colors[theme].tint,
      arrowColor: red,
      textDayHeaderFontFamily: "nunito",
      textMonthFontFamily: "nunito",
      monthTextColor: Colors[theme].text,
    }}
  />
);
