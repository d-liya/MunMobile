import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NewsTabParamList } from "../types";
import MainNewsTabScreen from "../screens/MainNewsTabScreen";
import NewsTabScreen from "../screens/NewsTabScreen";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";
import Colors, { NewsSectionColors } from "../constants/Colors";
import { useColorScheme } from "../hooks";

const NewsTabStack = createStackNavigator<NewsTabParamList>();

export default function NewsTabNavigator() {
  const theme = useColorScheme();
  return (
    <NewsTabStack.Navigator screenOptions={{ headerShown: false }}>
      <NewsTabStack.Screen name="MainNewsTabScreen" component={MainNewsTabScreen} />
      <NewsTabStack.Screen
        name="NewsTabScreen"
        component={NewsTabScreen}
        options={({ route }) => ({
          title: route.params.category,
          headerShown: true,
          headerStyle: {
            backgroundColor:
              theme === "light" ? NewsSectionColors[route.params.category] : Colors[theme],
          },
          headerTintColor: "#fff",
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={{
                backgroundColor: "none",
              }}
            >
              <Ionicons
                name={Platform.OS === "ios" ? "share-outline" : "share-social-outline"}
                size={24}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 10,
          },
        })}
      />
    </NewsTabStack.Navigator>
  );
}
