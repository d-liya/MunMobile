import React from "react";
import { useEffect } from "react";
import { Agenda as DefaultAgenda } from "react-native-calendars";
import { View, Text } from "react-native-ui-lib";
import Colors from "../../../constants/Colors";
import { useAppSelector, useColorScheme } from "../../../hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Agenda() {
  const theme = useColorScheme();
  const coursesReducer = useAppSelector((state) => state.courses);
  useEffect(() => {}, []);
  return (
    <DefaultAgenda
      items={{
        "2021-05-18": [{ name: "Today" }],
        "2021-05-19": [{ date: [] }],
      }}
      selected={Date.now()}
      renderItem={(item, firstItemInDay) => (
        <View flex br10>
          <Text>{item.name}</Text>
        </View>
      )}
      pastScrollRange={5}
      futureScrollRange={5}
      theme={{
        backgroundColor: Colors[theme].tint,
        calendarBackground: Colors[theme].tint,
      }}
      renderEmptyData={() => {
        return (
          <MaterialCommunityIcons
            style={{ textAlign: "center", marginTop: 50 }}
            name="calendar-blank"
            size={40}
            color={Colors[theme].tabIconDefault}
          />
        );
      }}
      refreshing
    />
  );
}
