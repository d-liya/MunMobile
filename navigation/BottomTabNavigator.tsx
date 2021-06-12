/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";

import StudentTabNavigator from "./StudentTabNaviagtor";
import LibraryTabNavigator from "./LibraryTabNavigator";
import InformationTabNaviagtor from "./InformationTabNavigator";
import NewsTabNavigator from "./NewsTabNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { BottomTabParamList } from "../types";
import { TabBarIcon } from "../components/Common/TabBarIcon";
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const handleTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    switch (routeName) {
      case "CourseScreen":
        return false;
      case "NewsTabScreen":
        return false;
      case "GradesScreen":
        return false;
      case "MapScreen":
        return false;
      case "CourseLookUpScreen":
        return false;
      case "LibraryInfoScreen":
        return false;
      default:
        return true;
    }
  };
  return (
    <BottomTab.Navigator
      initialRouteName="NewsTab"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tabIconSelected,
      }}
      screenOptions={({ route }) => ({
        tabBarVisible: handleTabBarVisibility(route),
      })}
    >
      <BottomTab.Screen
        name="NewsTab"
        component={NewsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper" color={color} />,
          tabBarLabel: "News",
        }}
      />
      <BottomTab.Screen
        name="StudentTab"
        component={StudentTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          tabBarLabel: "Student",
        }}
      />
      <BottomTab.Screen
        name="LibraryTab"
        component={LibraryTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="library" color={color} />,
          tabBarLabel: "Library",
        }}
      />
      <BottomTab.Screen
        name="InformationTab"
        component={InformationTabNaviagtor}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="apps" color={color} />,
          tabBarLabel: "General",
        }}
      />
    </BottomTab.Navigator>
  );
}
