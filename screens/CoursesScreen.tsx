import React from "react";
import { ScrollView, View, Text } from "../components/Themed";
import SwipeableView from "../components/Common/SwipeableView";
import Agenda from "../components/StudentTab/Courses/Agenda";
import { useAppDispatch, useAppSelector } from "../hooks";
import SubjectCard from "../components/StudentTab/Courses/SubjectCard";
import { useEffect } from "react";
import { getCourseInfoAsyc } from "../redux/Slices/courses";
import commonStyles from "../components/Common/Styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StudentTabParamList } from "../types";
import Navbar from "../components/Navbar/Navbar";

type CourseNavigationProps = StackNavigationProp<
  StudentTabParamList,
  "CourseScreen"
>;
type Props = {
  navigation: CourseNavigationProps;
};

export default function CoursesScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();
  const coursesReducer = useAppSelector((state) => state.courses);
  useEffect(() => {
    dispatch(getCourseInfoAsyc());
  }, []);
  return (
    <>
      <Navbar
        navigation={navigation}
        containerStyle={{ position: "relative" }}
      />
      <View style={[commonStyles.paddingSides, { paddingTop: 10 }]}>
        <Text text="boldMediumTitle">Courses</Text>
      </View>
      <ScrollView style={[commonStyles.paddingSides]}>
        {coursesReducer.status === "SUCCEDDED" &&
          coursesReducer.courses.map((el, i) => (
            <SubjectCard
              code={el.code}
              color={el.color}
              name={el.name}
              key={i}
            />
          ))}
      </ScrollView>
      <SwipeableView children={<Agenda />} header="Calendar" />
    </>
  );
}
