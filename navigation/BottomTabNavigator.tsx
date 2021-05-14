/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import StudentTabNavigator from "./StudentTabNaviagtor";
import LibraryTabNavigator from "./LibraryTabNavigator";
import InformationTabNaviagtor from "./InformationTabNavigator";
import NewsTabNavigator from "./NewsTabNavigator";

import { BottomTabParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

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
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="newspaper" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="StudentTab"
        component={StudentTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
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

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>["name"]; color: string }) {
  return <Ionicons size={25} style={{ marginBottom: -3 }} {...props} />;
}
