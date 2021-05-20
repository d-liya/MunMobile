import React from "react";
import ExpandableCard from "../components/StudentTab/Courses/ExpandableCard";
import { CalendarColors } from "../constants/Colors";
import { ScrollView } from "../components/Themed";
export default function CoursesScreen() {
  return (
    <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <ExpandableCard color={CalendarColors[0]} />
      <ExpandableCard color={CalendarColors[1]} />
      <ExpandableCard color={CalendarColors[2]} />
    </ScrollView>
  );
}
