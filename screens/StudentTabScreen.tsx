import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native-ui-lib";
import Card from "../components/StudentTab/Card";
import { SafeAreaScrollView } from "../components/Themed";
import { red } from "../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { StackNavigationProp } from "@react-navigation/stack";
import { StudentTabParamList } from "../types";

type StudentTabNavigatorProps = StackNavigationProp<StudentTabParamList, "StudentTabScreen">;
type Props = {
  navigation: StudentTabNavigatorProps;
};
export default function StudentTabScreen({ navigation }: Props) {
  const handleScreenChange = (screen: keyof StudentTabParamList) => {
    navigation.navigate(screen);
  };
  return (
    <SafeAreaScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Text text30H style={{ paddingTop: 15 }}>
        Student{"\n"}Resources
      </Text>
      <View paddingT-10 flex>
        <Card
          text="Courses"
          iconName="chalkboard-teacher"
          onPress={() => handleScreenChange("CoursesTab")}
        />
        <Card text="Grades" iconName="poll" onPress={() => handleScreenChange("GradesScreen")} />
        <Card
          text="Athletics"
          iconName="running"
          onPress={() => openInBrowser("https://goseahawks.ca/landing/index")}
        />
        <Card
          text="Current Student"
          iconName="info"
          onPress={() => openInBrowser("https://www.mun.ca/main/students/")}
        />
        <Card
          text="Become A Graduate Student"
          iconName="graduation-cap"
          onPress={() => openInBrowser("https://www.mun.ca/become/graduate/")}
        />
      </View>
    </SafeAreaScrollView>
  );
}
function openInBrowser(url: string) {
  WebBrowser.openBrowserAsync(url);
}
function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}
