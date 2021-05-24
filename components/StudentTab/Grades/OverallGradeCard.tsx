import React from "react";
import { View, Text, ActivityIndicator } from "../../Themed";
import Colors from "../../../constants/Colors";
import { useAppSelector, useColorScheme } from "../../../hooks";
import Chart from "./Chart";
import { StyleSheet } from "react-native";

export default function OverallGradeCard() {
  const theme = useColorScheme();
  const gradesReducer = useAppSelector((state) => state.grades);
  return (
    <>
      {gradesReducer.status === "SUCCEDDED" && (
        <>
          <View style={[{ backgroundColor: Colors[theme].tint }, styles.textWrapper]}>
            <Text text="semiBoldsecondaryText">Earned Hours</Text>
            <Text>{gradesReducer.earnedHours?.toFixed(3)}</Text>
          </View>
          <View style={[{ backgroundColor: Colors[theme].tint }, styles.textWrapper]}>
            <Text text="semiBoldsecondaryText">GPA Hours</Text>
            <Text>{gradesReducer.gpahours?.toFixed(3)}</Text>
          </View>
          <View style={[{ backgroundColor: Colors[theme].tint }, styles.textWrapper]}>
            <Text text="semiBoldsecondaryText">GPA</Text>
            <Text>{gradesReducer.gpa?.toFixed(2)}</Text>
          </View>
          <View style={styles.chartWrapper}>
            <Text text="semiBoldsecondaryText">GPA Distribution</Text>
            {gradesReducer.grades && (
              <Chart
                labels={gradesReducer.grades?.map((el) => el.semester)}
                data={gradesReducer.grades?.map((el) => el.gpa)}
              />
            )}
          </View>
        </>
      )}

      {gradesReducer.status === "LOADING" && (
        <ActivityIndicator
          style={[styles.loaderWrapper, { backgroundColor: Colors[theme].tint }]}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    padding: 5,
    justifyContent: "space-between",
  },
  chartWrapper: {
    alignItems: "center",
    marginTop: 20,
  },
  loaderWrapper: {
    marginTop: 60,
  },
});
