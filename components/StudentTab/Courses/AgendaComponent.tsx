import React, { useCallback, useState, useEffect } from "react";
import { Agenda as DefaultAgenda } from "react-native-calendars";
import { View, Text, LoaderScreen } from "react-native-ui-lib";
import Colors, { CalendarColors } from "../../../constants/Colors";
import { useAppSelector, useColorScheme } from "../../../hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LineSeperator } from "../../Common/LineSeperator";
type Props = {
  backgroundColor: string;
};
export default function Agenda({ backgroundColor }: Props) {
  return (
    <DefaultAgenda
      items={{
        "2021-05-24": [
          {
            name: "Lectures",
            code: "MATH 2050",
            color: CalendarColors[2],
            time: "08:00 am - 09:00 am",
          },
          {
            name: "Lectures",
            code: "COMP 1001",
            color: CalendarColors[0],
            time: "10:00 am - 11:00 am",
          },
        ],
        "2021-05-26": [
          {
            name: "Lectures",
            code: "COMP 1001",
            color: CalendarColors[0],
            time: "10:00 am - 11:00 am",
          },
          {
            name: "Lectures",
            code: "COMP 1002",
            color: CalendarColors[1],
            time: "11:00 am - 12:00 am",
          },
          {
            name: "Lectures",
            code: "ENGL 1020",
            color: CalendarColors[3],
            time: "04:00 pm - 05:00 pm",
          },
        ],
        "2021-05-27": [
          {
            name: "Lectures",
            code: "MATH 2050",
            color: CalendarColors[2],
            time: "08:00 am - 09:00 am",
          },
          {
            name: "Lectures",
            code: "COMP 1001",
            color: CalendarColors[0],
            time: "10:00 am - 11:00 am",
          },
        ],
        "2021-05-28": [
          {
            name: "Lectures",
            code: "COMP 1001",
            color: CalendarColors[0],
            time: "10:00 am - 11:00 am",
          },
          {
            name: "Lectures",
            code: "ENGL 1020",
            color: CalendarColors[3],
            time: "04:00 pm - 05:00 pm",
          },
        ],
      }}
      selected={Date.now()}
      renderItem={(item, firstItemInDay) => (
        <>
          {firstItemInDay && (
            <LineSeperator styles={{ marginTop: 8, marginBottom: 0, marginLeft: -35 }} />
          )}
          <View
            flex
            br30
            backgroundColor={item.color}
            marginT-2
            marginT-8={firstItemInDay}
            padding-8
          >
            <Text color="white" text70BL>
              {item.code}
            </Text>
            <Text color="white">{item.time}</Text>
            <Text color="white">{item.name}</Text>
          </View>
        </>
      )}
      pastScrollRange={5}
      futureScrollRange={5}
      theme={{
        backgroundColor: backgroundColor,
        calendarBackground: backgroundColor,
      }}
      renderEmptyData={() => {
        return (
          <MaterialCommunityIcons
            style={{ textAlign: "center", marginTop: 50 }}
            name="calendar-blank"
            size={40}
            color="#ccc"
          />
        );
      }}
      refreshing
    />
  );
}
