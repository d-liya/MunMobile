import React from "react";
import { View } from "../components/Themed";
import Agenda from "../components/StudentTab/Courses/AgendaComponent";

export default function AgendaScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Agenda />
    </View>
  );
}
