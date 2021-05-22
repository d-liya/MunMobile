import React from "react";
import { View, Text, LoaderScreen } from "react-native-ui-lib";
import Colors from "../../../constants/Colors";
import { useAppSelector, useColorScheme } from "../../../hooks";
import Chart from "./Chart";

export default function OverallGradeCard() {
  const theme = useColorScheme();
  const gradesReducer = useAppSelector((state) => state.grades);
  return (
    <>
      {gradesReducer.status === "SUCCEDDED" && (
        <>
          <View row padding-5 spread backgroundColor={Colors[theme].tint}>
            <Text text70H>Earned Hours</Text>
            <Text>{gradesReducer.earnedHours?.toFixed(3)}</Text>
          </View>
          <View row padding-5 spread backgroundColor={Colors[theme].tint}>
            <Text text70H>GPA Hours</Text>
            <Text>{gradesReducer.gpahours?.toFixed(3)}</Text>
          </View>
          <View row padding-5 spread backgroundColor={Colors[theme].tint}>
            <Text text70H>GPA</Text>
            <Text>{gradesReducer.gpa?.toFixed(2)}</Text>
          </View>
          <View center marginT-20>
            <Text text70>GPA Distribution</Text>
            <Chart
              labels={gradesReducer.grades?.map((el) => el.semester)}
              data={gradesReducer.grades?.map((el) => el.gpa)}
            />
          </View>
        </>
      )}

      {gradesReducer.status === "LOADING" && (
        <View marginT-60>
          <LoaderScreen message="Loading.." />
        </View>
      )}
    </>
  );
}
