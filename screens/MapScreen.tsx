import React from "react";
import MapView from "react-native-maps";
import { View } from "../components/Themed";
import { SharedElement } from "react-navigation-shared-element";
import { StackNavigationProp } from "@react-navigation/stack";
import { InfromationTabParamList } from "../types";

type MapScreenNavigatorProps = StackNavigationProp<InfromationTabParamList, "MapScreen">;
type Props = {
  navigation: MapScreenNavigatorProps;
};

export default function MapScreen({ navigation }: Props) {
  const handleMapCLose = () => {
    navigation.popToTop();
  };
  return (
    <SharedElement id="map">
      <MapView
        initialRegion={{
          latitude: 47.574478424736604,
          longitude: -52.73285135387028,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapCLose}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </SharedElement>
  );
}
