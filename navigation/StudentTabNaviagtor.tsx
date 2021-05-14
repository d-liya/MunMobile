import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StudentTabScreen from "../screens/StudentTabScreen";
import { StudentTabParamList } from "../types";

const StudentTabStack = createStackNavigator<StudentTabParamList>();

export default function StudentTabNavigator() {
  return (
    <StudentTabStack.Navigator screenOptions={{ headerShown: false }}>
      <StudentTabStack.Screen name="StudentTabScreen" component={StudentTabScreen} />
    </StudentTabStack.Navigator>
  );
}
