/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { ImageSourcePropType } from "react-native";
import { NewsSectionColors } from "./constants/Colors";

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
  NewsTabScreen: { category: keyof typeof NewsSectionColors | string; title: string };
};

export type StudentTabParamList = {
  StudentTabScreen: undefined;
  GradesScreen: undefined;
  CourseScreen: undefined;
};

export type LibraryTabParamList = {
  LibraryTabScreen: undefined;
};

export type StudentBottomTabParamList = {
  CoursesTabScreen: undefined;
  AgendaTabScreen: undefined;
};

export type InfromationTabParamList = {
  InformationTabScreen: undefined;
  MapScreen: undefined;
};

export type FetchStatus = "IDLE" | "LOADING" | "SUCCEDDED" | "FAILED";

//News
export type News = {
  image: ImageSourcePropType;
  title: string;
  category: string;
  date?: string;
  description?: string;
  markdownText?: string;
};
