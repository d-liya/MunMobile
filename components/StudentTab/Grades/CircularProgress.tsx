import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Colors, Text } from "react-native-ui-lib";
export default function CircularProgress({ fill }: { fill: number | string }) {
  return typeof fill === "number" ? (
    <AnimatedCircularProgress
      size={80}
      width={5}
      fill={fill}
      tintColor="#3269a8"
      backgroundColor={Colors.grey60}
      children={(e) => <Text text70H>{Math.floor(e)}%</Text>}
    />
  ) : (
    <AnimatedCircularProgress
      size={80}
      width={5}
      fill={fill === "PAS" ? 100 : 0}
      tintColor="#3269a8"
      backgroundColor={Colors.grey60}
      children={(e) => <Text text70H>{fill}</Text>}
    />
  );
}
