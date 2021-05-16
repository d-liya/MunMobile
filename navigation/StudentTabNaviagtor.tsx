import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StudentTabScreen from "../screens/StudentTabScreen";
import { StudentTabParamList } from "../types";
import CoursesScreen from "../screens/CoursesScreen";
import GradesScreen from "../screens/GradesScreen";

const StudentTabStack = createStackNavigator<StudentTabParamList>();

export default function StudentTabNavigator() {
  return (
    <StudentTabStack.Navigator>
      <StudentTabStack.Screen
        name="StudentTabScreen"
        component={StudentTabScreen}
        options={{ headerShown: false }}
      />
      <StudentTabStack.Screen
        name="CoursesScreen"
        component={CoursesScreen}
        options={{ headerTitle: "Courses" }}
      />
      <StudentTabStack.Screen
        name="GradesScreen"
        component={GradesScreen}
        options={{ headerTitle: "Grades" }}
      />
    </StudentTabStack.Navigator>
  );
}
