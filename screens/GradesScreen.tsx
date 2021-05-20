import React from "react";
import { useState } from "react";
import { Text, Button, Colors } from "react-native-ui-lib";
import { ScrollView } from "../components/Themed";
import { Picker } from "@react-native-picker/picker";
import useColorScheme from "../hooks/useColorScheme";
import { red } from "../constants/Colors";
import Semester from "../components/StudentTab/Grades/Card";
import Swipeable from "react-native-ui-lib/generatedTypes/components/drawer/Swipeable";
import SwipeableView from "../components/StudentTab/Grades/SwipeableView";
const state = {
  selectedValue: 1,
  items: [
    { label: "2021 Winter", value: 1 },
    { label: "2020 Fall", value: 2 },
    { label: "2020 Winter", value: 3 },
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
export default function GradesScreen() {
  const theme = useColorScheme();
  const [selectedSemester, set] = useState(state.selectedValue);
  return (
    <ScrollView style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 10 }}>
      <Text text60>Select The Term</Text>
      {/* <Picker
        itemStyle={{
          color: theme === "dark" ? Colors.white : Colors.black,
        }}
        selectedValue={selectedSemester}
        onValueChange={(value, i) => set(value)}
      >
        {state.items.map((el, i) => (
          <Picker.Item key={i} label={el.label} value={el.value} />
        ))}
      </Picker> */}
      {/* <Text>You have selected {selectedSemester}</Text> */}
      <SwipeableView childern={<Semester data={state.data[1]} />} />
    </ScrollView>
  );
}
