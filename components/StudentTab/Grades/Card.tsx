import React from "react";
import { View, Text, Colors } from "react-native-ui-lib";
import CircularProgress from "./CircularProgress";
type Course = {
  title: string;
  name: string;
  marks: string | number;
};
type Props = {
  data: Course[];
};

export default function SemesterCard({ data }: Props) {
  return (
    <View style={{ flexWrap: "wrap" }} row center>
      {data.map((el, i) => (
        <CourseCard key={i} marks={el.marks} courseName={el.name} courseTitle={el.title} />
      ))}
    </View>
  );
}

const CourseCard = ({
  marks,
  courseName,
  courseTitle,
}: {
  marks: number | string;
  courseName: string;
  courseTitle: string;
}) => (
  <View margin-10 width={150} padding-10 paddingR-20 paddingL-20 br20 center>
    <CircularProgress fill={marks} />
    <View center paddingT-5>
      <Text>{courseName}</Text>
      <Text center numberOfLines={1}>
        {courseTitle}
      </Text>
    </View>
  </View>
);
