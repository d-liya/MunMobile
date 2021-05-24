import React, { FunctionComponent } from "react";
import { View, Text, TouchableOpacity, TouchableOpacityProps } from "../Themed";
import { Image, StyleSheet } from "react-native";
import { red } from "../../constants/Colors";
import { News } from "../../types";

type FeaturedNewsProps = News & TouchableOpacityProps;

export const FeaturedNews: FunctionComponent<FeaturedNewsProps> = ({
  image,
  title,
  category,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.textVIew}>
        <Text text="secondaryText" color={red} style={styles.categoryText}>
          {category}
        </Text>
        <Text text="semiBoldbodyText">{title}</Text>
        <Text text="bodyText">{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 6,
    height: 200,
  },
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textVIew: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  categoryText: {
    paddingBottom: 5,
  },
});
