import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { useColorScheme } from "../../../hooks";

export default function Chart({ labels, data }: { labels: string[]; data: number[] }) {
  const theme = useColorScheme();
  return (
    data &&
    data.length > 0 && (
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
            },
          ],
        }}
        width={Dimensions.get("window").width - 30} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to
        transparent
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) =>
            theme === "light" ? `rgba(0,0,0, ${opacity})` : `rgba(255,255,255,${opacity})`,
          labelColor: (opacity = 1) =>
            theme === "light" ? `rgba(0,0,0, ${opacity})` : `rgba(255,255,255,${opacity})`,
          propsForDots: {
            r: "6",
          },
          style: {
            borderRadius: 6,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          padding: 5,
          borderRadius: 6,
        }}
      />
    )
  );
}
