import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StudentTabScreen from "../screens/StudentTabScreen";
import { BottomTabParamList, StudentBottomTabParamList, StudentTabParamList } from "../types";
import GradesScreen from "../screens/GradesScreen";
import CoursesBottomTabNavigator from "./CoursesBottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

const StudentTabStack = createStackNavigator<StudentTabParamList>();
type NavigatorProps = BottomTabNavigationProp<BottomTabParamList, "StudentTab">;
type Props = {
  navigation: NavigatorProps;
};
export default function StudentTabNavigator({ navigation }: Props) {
  return (
    <StudentTabStack.Navigator>
      <StudentTabStack.Screen
        name="StudentTabScreen"
        component={StudentTabScreen}
        options={{ headerShown: false }}
      />
      <StudentTabStack.Screen
        name="CoursesTab"
        component={CoursesBottomTabNavigator}
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
