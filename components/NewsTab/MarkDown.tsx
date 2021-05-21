import React from "react";
import Markdown from "react-native-markdown-display";
import { StyleSheet } from "react-native";
import Colors, { NewsSectionColors, red } from "../../constants/Colors";
import { useColorScheme } from "../../hooks";
type Props = {
  category: string;
  markdownText: string;
};

export default function MarkDown({ category, markdownText }: Props) {
  const color = useColorScheme();
  const styles = StyleSheet.create({
    body: {
      color: Colors[color].text,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
    },
    blockquote: {
      backgroundColor: "transparent",
      color: NewsSectionColors[category],
      borderColor: NewsSectionColors[category],
    },
    link: {
      color: "#1a6dbc",
    },
  });

  return <Markdown style={styles}>{markdownText}</Markdown>;
}
