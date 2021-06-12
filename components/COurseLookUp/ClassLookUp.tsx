import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BackButton from "../Common/BackButton";
import Button from "../Common/Button";
import Picker from "../Common/Picker";
import { ScrollView, View, Text } from "../Themed";

const pickerOne = [
  { label: "Computer Science", value: "comp" },
  { label: "Mathematics", value: "math" },
  { label: "Physics", value: "phy" },
];

export default function ClassLookUp() {
  const [course, setCourse] = useState("");
  const [open, set] = useState(false);

  return open ? (
    <ScrollView style={styles.scrollContainer}>
      <TouchableOpacity onPress={() => set(!open)}>
        <BackButton />
      </TouchableOpacity>
      <Text text="boldMediumTitle" style={{ textAlign: "center" }}>
        No Data
      </Text>
    </ScrollView>
  ) : (
    <>
      <Picker style={styles.pickerStyle} value={course} setValue={setCourse} items={pickerOne} />
      <View style={styles.buttonContainer}>
        <Button text="Look Up" onPress={() => set(!open)} />
      </View>
    </>
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
});
