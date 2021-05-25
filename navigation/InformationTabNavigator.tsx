import * as React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { InfromationTabParamList } from "../types";
import InformationTabScreen from "../screens/InfromationTabScreen";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import MapScreen from "../screens/MapScreen";

export const iosTransitionSpec = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

const SharedElementStack = createSharedElementStackNavigator<InfromationTabParamList>();

export default function InformationTabNaviagtor() {
  return (
    <SharedElementStack.Navigator
      mode="modal"
      screenOptions={{
        useNativeDriver: true,
        // Enable gestures if you want. I disabled them because of my card style interpolator opacity animation
        gestureEnabled: false,
        // gestureResponseDistance: {
        // 	vertical: 100,
        // },
        // gestureDirection: 'vertical',
        ...TransitionPresets.ModalSlideFromBottomIOS,
        transitionSpec: {
          open: iosTransitionSpec,
          close: iosTransitionSpec,
        },
        // Opacity animation, you can also adjust this by playing with transform properties.
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      headerMode="none"
    >
      <SharedElementStack.Screen name="InformationTabScreen" component={InformationTabScreen} />
      <SharedElementStack.Screen name="MapScreen" component={MapScreen} />
    </SharedElementStack.Navigator>
  );
}

// const InformtaionTabStack = createStackNavigator<InfromationTabParamList>();

// export default function InformationTabNaviagtor() {
//   return (
//     <InformtaionTabStack.Navigator screenOptions={{ headerShown: false }}>
//       <InformtaionTabStack.Screen
//         name="InformationTabScreen"
//         component={InformationTabScreen}
//       />
//     </InformtaionTabStack.Navigator>
//   );
// }
