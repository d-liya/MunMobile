/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

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
      case "CoursesTab":
        return false;
      case "NewsTabScreen":
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
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="NewsTab"
        component={NewsTabNavigator}
        options={({ route }) => ({
          tabBarVisible: handleTabBarVisibility(route),
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="StudentTab"
        component={StudentTabNavigator}
        options={({ route }) => ({
          tabBarVisible: handleTabBarVisibility(route),
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="LibraryTab"
        component={LibraryTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="library" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="InformationTab"
        component={InformationTabNaviagtor}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="apps" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
