/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ImageSourcePropType } from "react-native";

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  NewsTab: undefined;
  StudentTab: undefined;
  LibraryTab: undefined;
  InformationTab: undefined;
};

export type NewsTabParamList = {
  MainNewsTabScreen: undefined;
  NewsTabScreen: { category: string; title: string };
};

export type StudentTabParamList = {
  StudentTabScreen: undefined;
  GradesScreen: undefined;
  CoursesTab: undefined;
};

export type LibraryTabParamList = {
  LibraryTabScreen: undefined;
};

export type InfromationTabParamList = {
  InformationTabScreen: undefined;
};

export type StudentBottomTabParamList = {
  CoursesTabScreen: undefined;
  AgendaTabScreen: undefined;
};

export type News = {
  image: ImageSourcePropType;
  title: String;
  category: String;
  url?: String;
  date?: String;
  description?: String;
};
