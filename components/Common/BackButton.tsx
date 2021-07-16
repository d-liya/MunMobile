import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "../Themed";

export default function BackButton() {
  return Platform.OS === "ios" ? (
    <Ionicons name="chevron-back" size={28} />
  ) : (
    <Ionicons name="arrow-back" size={28} />
  );
}
