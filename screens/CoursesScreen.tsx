import React from "react";
import Calendar from "../components/StudentTab/Courses/Calendar";
import { ScrollView } from "../components/Themed";

export default function CoursesScreen() {
  return (
    <ScrollView>
      <Calendar />
    </ScrollView>
  );
}
