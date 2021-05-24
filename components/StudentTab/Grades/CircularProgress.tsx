import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Text } from "../../Themed";
export default function CircularProgress({ fill }: { fill: number | string }) {
  return typeof fill === "number" ? (
    <AnimatedCircularProgress
      size={80}
      width={5}
      fill={fill}
      tintColor="#3269a8"
      backgroundColor="rgb(209,209,214)"
      children={(e) => <Text text="semiBoldsecondaryText">{Math.floor(e)}%</Text>}
    />
  ) : (
    <AnimatedCircularProgress
      size={80}
      width={5}
      fill={fill === "PAS" ? 100 : 0}
      tintColor="#3269a8"
      backgroundColor="rgb(209,209,214)"
      children={(e) => <Text text="semiBoldsecondaryText">{fill}</Text>}
    />
  );
}
