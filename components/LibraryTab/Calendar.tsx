import React from "react";
import { View, Text, ThemeProps } from "../Themed";
import { Calendar as DefaulltCalendar } from "react-native-calendars";
import { useColorScheme } from "../../hooks";
import Colors, { red } from "../../constants/Colors";

export default function Calendar({ ...props }) {
  const theme = useColorScheme();
  return theme === "light" ? (
    <CalendarComponent theme={"light"} {...props} />
  ) : (
    <View>
      <CalendarComponent theme={"dark"} {...props} />
    </View>
  );
}

const CalendarComponent = ({
  theme,
  ...props
}: {
  theme: "light" | "dark";
}) => (
  <DefaulltCalendar
    current={Date.now()}
    minDate={Date.now()}
    theme={{
      backgroundColor: Colors[theme].background,
      calendarBackground: Colors[theme].background,
      arrowColor: red,
      monthTextColor: Colors[theme].text,
    }}
    {...props}
  />
);
