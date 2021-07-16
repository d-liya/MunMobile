import React from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "../components/Themed";
import { useAppDispatch, useAppSelector, useColorScheme } from "../hooks";
import Semester from "../components/StudentTab/Grades/Card";
import SwipeableView from "../components/Common/SwipeableView";
import SemesterCard from "../components/StudentTab/Grades/SemesterCard";
import { StyleSheet } from "react-native";
import OverallGradeCard from "../components/StudentTab/Grades/OverallGradeCard";
import { useEffect } from "react";
import { getGradesAsync, setSemesterInfo } from "../redux/Slices/grades";
import Navbar from "../components/Navbar/Navbar";
import { StackNavigationProp } from "@react-navigation/stack";
import { StudentTabParamList } from "../types";
import Constants from "expo-constants";
import commonStyles from "../components/Common/Styles";

type GradeNavigationProps = StackNavigationProp<
  StudentTabParamList,
  "GradesScreen"
>;
type Props = {
  navigation: GradeNavigationProps;
};

export default function GradesScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const gradesReducer = useAppSelector((state) => state.grades);
  const theme = useColorScheme();
  const [open, set] = useState(false);

  useEffect(() => {
    dispatch(getGradesAsync());
  }, []);

  const handleSemesterCardPress = (index: number) => {
    if (gradesReducer.grades) {
      const info = gradesReducer.grades[index];
      dispatch(setSemesterInfo(info));
    }
    set(true);
  };

  return (
    <>
      <Navbar
        navigation={navigation}
        containerStyle={{ position: "relative" }}
      />
      <View style={[commonStyles.paddingSides]}>
        <Text text="boldMediumTitle">Grades</Text>
      </View>
      <ScrollView style={[commonStyles.paddingSides, styles.scrollContainer]}>
        {gradesReducer.status === "SUCCEDDED" &&
          gradesReducer.grades?.map((el, i) => (
            <SemesterCard
              key={i}
              name={el.semester}
              gpa={el.gpa}
              handleOnPress={() => handleSemesterCardPress(i)}
            />
          ))}
      </ScrollView>
      <SwipeableView children={<OverallGradeCard />} header="Overall" />
      {gradesReducer.status === "SUCCEDDED" &&
        Object.keys(gradesReducer.selectedSemInfo).length > 0 && (
          <SwipeableView
            children={<Semester data={gradesReducer.selectedSemInfo.courses} />}
            header={gradesReducer.selectedSemInfo.semester}
            startPosition="HIDDEN"
            handleOpen={(el) => set(el)}
            open={open}
            icon="close"
          />
        )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 0,
    ...StyleSheet.absoluteFillObject,
  },
  scrollContainer: {
    paddingTop: 10,
  },
});
