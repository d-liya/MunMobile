import React from "react";
import { useState } from "react";
import { Text, Button, Colors } from "react-native-ui-lib";
import { ScrollView } from "../components/Themed";
import { Picker } from "@react-native-picker/picker";
import useColorScheme from "../hooks/useColorScheme";
const state = {
  selectedValue: 1,
  items: [
    { label: "2021 Winter", value: 1 },
    { label: "2020 Fall", value: 2 },
    { label: "2020 Winter", value: 3 },
  ],
};
export default function GradesScreen() {
  const theme = useColorScheme();
  const [selectedSemester, set] = useState(state.selectedValue);
  return (
    <ScrollView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <Text>Select The Term</Text>
      <Picker
        itemStyle={{
          color: theme === "dark" ? Colors.white : Colors.black,
        }}
        selectedValue={selectedSemester}
        onValueChange={(value, i) => set(value)}
      >
        {state.items.map((el, i) => (
          <Picker.Item key={i} label={el.label} value={el.value} />
        ))}
      </Picker>
      <Text>You have selected {selectedSemester}</Text>
    </ScrollView>
  );
}
