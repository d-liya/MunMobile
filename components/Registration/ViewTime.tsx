import { View, Text } from "../Themed";
import React from "react";

export default function ViewTime() {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 40,
        justifyContent: "space-between",
        paddingBottom: 80,
      }}
    >
      <View>
        <Text text="boldMediumTitle" style={{ paddingBottom: 20 }}>
          Registration Time
        </Text>
        <Text style={{ paddingBottom: 5 }}>Term : 2020 - 2021 Fall</Text>
        <Text style={{ paddingBottom: 5 }}>Start Date : July 21, 2020</Text>
        <Text style={{ paddingBottom: 5 }}>Start Time : 11.00 AM</Text>
      </View>
      <Text>Please note that all times listed are in Newfoundland time.</Text>
    </View>
  );
}
