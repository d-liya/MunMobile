import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationStackScreens } from "../types";
import RegistrationInfoScreen from "../screens/RegistrationInfoScreen";
import RegistrationTermSelectScreen from "../screens/RegistrationTermSelectScreen";

const RegistrationStack = createStackNavigator<RegistrationStackScreens>();

export default function RegistrationStackNavigator() {
  return (
    <RegistrationStack.Navigator screenOptions={{ headerShown: false }}>
      <RegistrationStack.Screen
        name="RegistrationTermSelectScreen"
        component={RegistrationTermSelectScreen}
      />
      <RegistrationStack.Screen
        name="RegistrationInfoScreen"
        component={RegistrationInfoScreen}
      />
    </RegistrationStack.Navigator>
  );
}
