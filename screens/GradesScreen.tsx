import React from "react";
import { useState } from "react";
import { Text, Button, Colors, View } from "react-native-ui-lib";
import { ScrollView } from "../components/Themed";
import { useAppDispatch, useAppSelector, useColorScheme } from "../hooks";
import Semester from "../components/StudentTab/Grades/Card";
import SwipeableView from "../components/Common/SwipeableView";
import SemesterCard from "../components/StudentTab/Grades/SemesterCard";
import { StyleSheet } from "react-native";
import OverallGradeCard from "../components/StudentTab/Grades/OverallGradeCard";
import { useEffect } from "react";
import { getGradesAsync, setSemesterInfo } from "../redux/Slices/grades";

export default function GradesScreen() {
  const dispatch = useAppDispatch();
  const gradesReducer = useAppSelector((state) => state.grades);
  const theme = useColorScheme();
  const [open, set] = useState(false);
  useEffect(() => {
    dispatch(getGradesAsync());
  }, []);
  const handleSemesterCardPress = (index: number) => {
    if (gradesReducer.grades) {
      const info = gradesReducer.grades[index];
      dispatch(setSemesterInfo(info));
    }
    set(true);
  };
  return (
    <>
      <View flex padding-10 paddingB-0 style={{ ...StyleSheet.absoluteFillObject }}>
        {gradesReducer.status === "SUCCEDDED" && (
          <ScrollView style={{ paddingTop: 5 }}>
            {gradesReducer.grades?.map((el, i) => (
              <SemesterCard
                key={i}
                name={el.semester}
                gpa={el.gpa}
                handleOnPress={() => handleSemesterCardPress(i)}
              />
            ))}
          </ScrollView>
        )}
      </View>
      <SwipeableView children={<OverallGradeCard />} header="Overall" />
      {gradesReducer.status === "SUCCEDDED" &&
        Object.keys(gradesReducer.selectedSemInfo).length > 0 && (
          <SwipeableView
            children={<Semester data={gradesReducer.selectedSemInfo.courses} />}
            header={gradesReducer.selectedSemInfo.semester}
            startPosition="HIDDEN"
            handleOpen={(el) => set(el)}
            open={open}
            icon="close"
          />
        )}
    </>
  );
}
