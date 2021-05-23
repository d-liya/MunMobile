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
        },
      },
      InformationTab: {
        screens: {
          InformationTabScreen: "info",
        },
      },
      LibraryTab: {
        screens: {
          LibraryTabScreen: "library",
        },
      },
      NotFound: "*",
    },
  },
};
