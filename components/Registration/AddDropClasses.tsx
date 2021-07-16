import React from "react";
import { CalendarColors } from "../../constants/Colors";
import SubjectCard from "../StudentTab/Courses/SubjectCard";
import { View, Text, ScrollView } from "../Themed";

export default function AddDropClasses() {
  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <Text text="boldMediumTitle" style={{ paddingBottom: 20 }}>
        Add/ Drop Courses
      </Text>
      <ScrollView>
        <SubjectCard
          code="CS2002"
          name="Software Enginering"
          color={CalendarColors[0]}
        />
        <SubjectCard
          code="CS2006"
          name="Computer Science Fundamentals"
          color={CalendarColors[1]}
        />
        <SubjectCard
          code="CS2007"
          name="Introduction to AI"
          color={CalendarColors[2]}
        />
      </ScrollView>
    </View>
  );
}
