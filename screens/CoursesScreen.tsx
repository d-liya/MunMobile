import React from "react";
import { ScrollView } from "../components/Themed";
import SwipeableView from "../components/Common/SwipeableView";
import Agenda from "../components/StudentTab/Courses/Agenda";
import { useAppDispatch, useAppSelector } from "../hooks";
import SubjectCard from "../components/StudentTab/Courses/SubjectCard";
import { useEffect } from "react";
import { getCourseInfoAsyc } from "../redux/Slices/courses";
import commonStyles from "../components/Common/Styles";

export default function CoursesScreen() {
  const dispatch = useAppDispatch();
  const coursesReducer = useAppSelector((state) => state.courses);
  useEffect(() => {
    dispatch(getCourseInfoAsyc());
  }, []);
  return (
    <>
      <ScrollView style={commonStyles.paddingSides}>
        {coursesReducer.status === "SUCCEDDED" &&
          coursesReducer.courses.map((el, i) => (
            <SubjectCard code={el.code} color={el.color} name={el.name} key={i} />
          ))}
      </ScrollView>
      <SwipeableView children={<Agenda />} header="Calendar" />
    </>
  );
}
