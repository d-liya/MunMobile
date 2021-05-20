import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Colors, Text } from "react-native-ui-lib";
export default function CircularProgress({ fill }: { fill: number | string }) {
  return typeof fill === "number" ? (
    <AnimatedCircularProgress
      size={100}
      width={8}
      fill={fill}
      tintColor="#f01e4c"
      backgroundColor={Colors.grey60}
      children={(e) => <Text text60H>{Math.floor(e)}%</Text>}
    />
  ) : (
    <AnimatedCircularProgress
      size={100}
      width={8}
      fill={fill === "PAS" ? 100 : 0}
      tintColor="#f01e4c"
      backgroundColor={Colors.grey60}
      children={(e) => <Text text60H>{fill}</Text>}
    />
  );
}
