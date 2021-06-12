import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LibraryTabScreen from "../screens/LibraryTabScreen";
import { LibraryTabParamList } from "../types";
import LibraryInfoScreen from "../screens/LibraryInfoScreen";

const LibraryTabStack = createStackNavigator<LibraryTabParamList>();

export default function LibraryTabNavigator() {
  return (
    <LibraryTabStack.Navigator screenOptions={{ headerShown: false }}>
      <LibraryTabStack.Screen name="LibraryTabScreen" component={LibraryTabScreen} />
      <LibraryTabStack.Screen name="LibraryInfoScreen" component={LibraryInfoScreen} />
    </LibraryTabStack.Navigator>
  );
}
