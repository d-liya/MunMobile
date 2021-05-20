import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StudentBottomTabParamList } from "../types";
import CoursesScreen from "../screens/CoursesScreen";
import AgendaScreen from "../screens/AgendaScreen";
import { TabBarIcon } from "../components/Common/TabBarIcon";
import { red } from "../constants/Colors";

const CoursesBottomTab = createBottomTabNavigator<StudentBottomTabParamList>();

export default function CoursesBottomTabNavigator() {
  return (
    <CoursesBottomTab.Navigator
      initialRouteName="CoursesTabScreen"
      tabBarOptions={{ showLabel: false, activeTintColor: red }}
    >
      <CoursesBottomTab.Screen
        name="CoursesTabScreen"
        component={CoursesScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="browsers" color={color} />,
        }}
      />
      <CoursesBottomTab.Screen
        name="AgendaTabScreen"
        component={AgendaScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
    </CoursesBottomTab.Navigator>
  );
}
