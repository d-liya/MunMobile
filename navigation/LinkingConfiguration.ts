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
      Root: {
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
              StudentBottomTab: {
                screens: {
                  CoursesScreen: "student/courses",
                  CourseCalendarScreen: "student/courses/calendar",
                },
              },
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
        },
      },

      NotFound: "*",
    },
  },
};
