import { StackNavigationProp } from "@react-navigation/stack";
import SwipeableViewWrapper, {
  RefProps,
} from "../components/Common/SwipeableViewWrapper";
import Navbar from "../components/Navbar/Navbar";
import { Text } from "../components/Themed";
import { RegistrationStackScreens } from "../types";
import commonStyles from "../components/Common/Styles";
import ClassLookUp from "../components/Registration/ClassLookUp";
import React, { useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Card from "../components/StudentTab/Card";
import { useAppSelector } from "../hooks";
import ViewTime from "../components/Registration/ViewTime";
import AddDropClasses from "../components/Registration/AddDropClasses";

type RegistrationStackNavigationProps = StackNavigationProp<
  RegistrationStackScreens,
  "RegistrationInfoScreen"
>;
type Props = {
  navigation: RegistrationStackNavigationProps;
};

const bottomSheetChild = (iconName: string) => {
  if (iconName === "search") {
    return <ClassLookUp />;
  } else if (iconName === "eye") {
    return <ViewTime />;
  } else if (iconName === "plus") {
    return <AddDropClasses />;
  }
  return null;
};

export default function RegistrationInfoScreen({ navigation }: Props) {
  const ref: RefProps = useRef();
  const { term } = useAppSelector((state) => state.registration);
  const [iconName, setIconName] = useState("");
  const handleOnPress = (iconName: string) => {
    setIconName("");
    if (ref.current) {
      ref.current.open();
      setIconName(iconName);
    }
  };

  return (
    <SwipeableViewWrapper
      bottomSheetChildren={bottomSheetChild(iconName)}
      style={commonStyles.paddingSides}
      bottomSheetStyle={commonStyles.paddingSides}
      ref={ref}
    >
      <>
        <Navbar
          navigation={navigation}
          containerStyle={styles.containerStyle}
        />
        <Text
          text="boldMediumTitle"
          style={{ paddingTop: 10, paddingBottom: 30 }}
        >
          Registration
        </Text>
        <Text text="semiBoldbodyText" style={{ paddingBottom: 20 }}>
          {term}
        </Text>
        <Card
          text="View Registration Time"
          iconName="eye"
          onPress={() => handleOnPress("eye")}
        />
        <Card
          text="Look up Course Offerings"
          iconName="search"
          onPress={() => handleOnPress("search")}
        />
        <Card
          text="Add / Drop Classes"
          iconName="plus"
          onPress={() => handleOnPress("plus")}
        />
      </>
    </SwipeableViewWrapper>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 50,
  },
  containerStyle: {
    position: "relative",
    marginTop: 5,
    marginLeft: -15,
    padding: 0,
    backgroundColor: "transparent",
  },
});
