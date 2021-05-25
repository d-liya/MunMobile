import React from "react";
import { View, Text } from "../Themed";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useColorScheme } from "../../hooks";
import Colors from "../../constants/Colors";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import { SharedElement } from "react-native-shared-element";

export default function HeardCard({ onPress }) {
  const theme = useColorScheme();

  return (
    <SharedElement id="map">
      <MapView
        initialRegion={{
          latitude: 47.574478424736604,
          longitude: -52.73285135387028,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={onPress}
        style={styles.container}
      />
    </SharedElement>
  );
}
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 2,
    width: "100%",
    borderRadius: 6,
    marginTop: 20,
  },
});
