import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StudentTabScreen from "../screens/StudentTabScreen";
import { BottomTabParamList, StudentTabParamList } from "../types";
import GradesScreen from "../screens/GradesScreen";
import CoursesBottomTabNavigator from "./CoursesBottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import CoursesScreen from "../screens/CoursesScreen";
import RegistrationTermSelectScreen from "../screens/RegistrationTermSelectScreen";
import BackButton from "../components/Common/BackButton";
import { View } from "../components/Themed";
import RegistrationStackNavigator from "./RegistrationStackNavigator";

const StudentTabStack = createStackNavigator<StudentTabParamList>();
type NavigatorProps = BottomTabNavigationProp<BottomTabParamList, "StudentTab">;
type Props = {
  navigation: NavigatorProps;
};
export default function StudentTabNavigator({ navigation }: Props) {
  return (
    <StudentTabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StudentTabStack.Screen
        name="StudentTabScreen"
        component={StudentTabScreen}
      />
      <StudentTabStack.Screen name="CourseScreen" component={CoursesScreen} />
      <StudentTabStack.Screen name="GradesScreen" component={GradesScreen} />
      <StudentTabStack.Screen
        name="RegistrationStack"
        component={RegistrationStackNavigator}
      />
    </StudentTabStack.Navigator>
  );
}
