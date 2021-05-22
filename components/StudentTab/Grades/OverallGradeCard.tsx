import React from "react";
import { View, Text } from "react-native-ui-lib";
import Colors from "../../../constants/Colors";
import { useColorScheme } from "../../../hooks";
import Chart from "./Chart";

export default function OverallGradeCard() {
  const theme = useColorScheme();
  return (
    <>
      <View row padding-5 spread backgroundColor={Colors[theme].tint}>
        <Text text70H>Earned Hours</Text>
        <Text>54.000</Text>
      </View>
      <View row padding-5 spread backgroundColor={Colors[theme].tint}>
        <Text text70H>GPA Hours</Text>
        <Text>30.000</Text>
      </View>
      <View row padding-5 spread backgroundColor={Colors[theme].tint}>
        <Text text70H>GPA</Text>
        <Text>3.70</Text>
      </View>
      <View center marginT-20>
        <Text text70>GPA Distribution</Text>
        <Chart />
      </View>
    </>
  );
}
