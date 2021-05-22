import React from "react";
import { useState } from "react";
import { Text, Button, Colors, View } from "react-native-ui-lib";
import { ScrollView } from "../components/Themed";
import { useAppDispatch, useAppSelector, useColorScheme } from "../hooks";
import Semester from "../components/StudentTab/Grades/Card";
import SwipeableView from "../components/StudentTab/Grades/SwipeableView";
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
      {gradesReducer.status === "SUCCEDDED" && (
        <View flex padding-10 paddingB-0 style={{ ...StyleSheet.absoluteFillObject }}>
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
        </View>
      )}
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

const state = {
  selectedValue: 1,
  items: [
    { label: "2020 Winter", value: 4.0 },
    { label: "2020 Fall", value: 3.85 },
    { label: "2021 Winter", value: 3.75 },
  ],
  data: {
    1: [
      { title: "Intro to Programming", name: "COMP 1001", marks: 88 },
      { title: "Intro to Logic for Comp Sci", name: "COMP 1002", marks: 93 },
      { title: "Linear Algebra I", name: "MATH 2050", marks: "PAS" },
      { title: "Writing Second Lang Stdnts !", name: "ENGL 1020", marks: 80 },
    ],
    2: [
      { title: "Foundation of Computing Sys", name: "COMP 1003", marks: 86 },
      { title: "Intro to Microeconomics", name: "ECON 1010", marks: 88 },
      { title: "CRW: Telling Stories", name: "ENGL 1090", marks: 71 },
      { title: "Calculus III", name: "MATH 2000", marks: 89 },
    ],
    3: [
      { title: "Obj-Orient Prgm Human Comp Int", name: "COMP 2001", marks: 71 },
      { title: "Data Strctrs & Algorithms", name: "COMP 2002", marks: 89 },
      { title: "CRW Phil of Human Nature", name: "PHIL 1010", marks: 74 },
    ],
  },
};
