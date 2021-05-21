import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { ColorSchemeName, useColorScheme as _useColorScheme } from "react-native";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useColorScheme = (): NonNullable<ColorSchemeName> =>
  _useColorScheme() as NonNullable<ColorSchemeName>;
