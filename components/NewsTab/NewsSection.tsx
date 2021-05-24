import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "../Themed";
import { red } from "../../constants/Colors";
import { News } from "../../types";
import { Image, StyleSheet } from "react-native";

type NewsSectionProps = News & TouchableOpacityProps;

export const NewsSection: FunctionComponent<NewsSectionProps> = ({
  category,
  title,
  date,
  image,
  description,
  onPress,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.textContainer}>
      <View>
        <Text color={red}>{category}</Text>
        <Text text="semiBoldsecondaryText">{title}</Text>
        {description && (
          <Text text="tertiaryText" numberOfLines={3} style={styles.descriptionText}>
            {description}
          </Text>
        )}
      </View>
      <View>
        <Text text="smallestText" color="gray">
          {date}
        </Text>
      </View>
    </View>
    {image && <Image style={styles.image} source={image} />}
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  image: {
    width: "35%",
    height: 125,
    resizeMode: "cover",
    borderRadius: 6,
  },
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    paddingBottom: 10,
    marginBottom: 10,
    flex: 1,
  },
  textContainer: {
    width: "60%",
    justifyContent: "space-between",
  },
  descriptionText: {
    padding: 5,
    paddingLeft: 0,
  },
});
