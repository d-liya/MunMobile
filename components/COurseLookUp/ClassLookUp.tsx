import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  handleCourseChange,
  handleSubjectChange,
} from "../../redux/Slices/course-registration";
import BackButton from "../Common/BackButton";
import Button from "../Common/Button";
import Picker from "../Common/Picker";
import { ScrollView, View, Text } from "../Themed";

const pickerOne = [
  { label: "Computer Science", value: "Computer Science" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Physics", value: "Physics" },
];

export default function ClassLookUp() {
  const { course, term, subject } = useAppSelector(
    (state) => state.registration
  );
  const dispatch = useAppDispatch();
  const [open, set] = useState(false);
  useEffect(() => {
    !open ? dispatch(handleSubjectChange("")) : null;
  }, [open]);
  return open ? (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginLeft: -15 }} onPress={() => set(!open)}>
        <BackButton />
      </TouchableOpacity>
      <Text style={styles.header} text="boldMediumTitle">
        {subject}
      </Text>
      <ScrollView style={styles.scrollContainer}>
        <Text text="boldMediumTitle" style={{ textAlign: "center" }}>
          No Data
        </Text>
      </ScrollView>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <Text style={styles.header} text="boldMediumTitle">
        {term}
      </Text>
      <Picker
        style={styles.pickerStyle}
        value={subject}
        setValue={(value) => dispatch(handleSubjectChange(value))}
        items={pickerOne}
      />
      <View style={styles.buttonContainer}>
        <Button
          text="Look Up"
          onPress={() => set(!open)}
          disabled={subject === ""}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerStyle: {
    marginTop: 10,
  },
  scrollContainer: {
    paddingTop: 10,
  },

  buttonContainer: {
    marginTop: 50,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
});
