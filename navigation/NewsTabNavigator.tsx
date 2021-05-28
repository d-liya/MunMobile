import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsTabParamList } from "../types";
import MainNewsTabScreen from "../screens/MainNewsTabScreen";
import NewsTabScreen from "../screens/NewsTabScreen";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { TouchableOpacity } from "../components/Themed";
import Colors, { NewsSectionColors } from "../constants/Colors";
import { useColorScheme } from "../hooks";

const NewsTabStack = createStackNavigator<NewsTabParamList>();

export default function NewsTabNavigator() {
  const theme = useColorScheme();
  return (
    <NewsTabStack.Navigator screenOptions={{ headerShown: false }}>
      <NewsTabStack.Screen name="MainNewsTabScreen" component={MainNewsTabScreen} />
      <NewsTabStack.Screen name="NewsTabScreen" component={NewsTabScreen} />
    </NewsTabStack.Navigator>
  );
}
