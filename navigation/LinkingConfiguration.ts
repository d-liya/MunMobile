/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      NewsTab: {
        screens: {
          MainNewsTabScreen: "news",
          NewsTabScreen: "news/:category/:title",
        },
      },
      StudentTab: {
        screens: {
          StudentTabScreen: "student",
          GradesScreen: "student/grades",
          CoursesScreen: "student/courses",
          RegistrationStack: {
            screens: {
              RegistrationTermSelectScreen: "student/registration/term",
              RegistrationInfoScreen: "student/registration/info",
            },
          },
        },
      },
      InformationTab: {
        screens: {
          InformationTabScreen: "info",
          MapScreen: "map",
        },
      },
      LibraryTab: {
        screens: {
          LibraryTabScreen: "library",
          LibraryInfoScreen: "library/:name",
        },
      },
      NotFound: "*",
    },
  },
};
