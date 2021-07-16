import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "../components/Themed";
import Card from "../components/StudentTab/Card";
import { SafeAreaScrollView } from "../components/Themed";
import { red } from "../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { StackNavigationProp } from "@react-navigation/stack";
import { StudentTabParamList } from "../types";
import commonStyles from "../components/Common/Styles";

type StudentTabNavigatorProps = StackNavigationProp<
  StudentTabParamList,
  "StudentTabScreen"
>;
type Props = {
  navigation: StudentTabNavigatorProps;
};

function _openInBrowser(url: string) {
  WebBrowser.openBrowserAsync(url);
}

export default function StudentTabScreen({ navigation }: Props) {
  const handleScreenChange = (screen: keyof StudentTabParamList) => {
    navigation.navigate(screen);
  };
  return (
    <SafeAreaScrollView style={commonStyles.paddingSides}>
      <Text text="boldMediumTitle" style={styles.headerText}>
        Student
      </Text>
      <Text text="boldTitle">Resources</Text>
      <View style={styles.container}>
        <Card
          text="Courses"
          iconName="chalkboard-teacher"
          onPress={() => handleScreenChange("CourseScreen")}
        />
        <Card
          text="Grades"
          iconName="poll"
          onPress={() => handleScreenChange("GradesScreen")}
        />
        <Card
          text="Registration"
          iconName="book"
          onPress={() => handleScreenChange("RegistrationStack")}
        />
        <Card
          text="Athletics"
          iconName="running"
          onPress={() => _openInBrowser("https://goseahawks.ca/landing/index")}
        />
        <Card
          text="Current Student"
          iconName="info"
          onPress={() => _openInBrowser("https://www.mun.ca/main/students/")}
        />
        <Card
          text={"Become A Graduate \nStudent"}
          iconName="graduation-cap"
          onPress={() => _openInBrowser("https://www.mun.ca/become/graduate/")}
        />
      </View>
    </SafeAreaScrollView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    paddingTop: 15,
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
