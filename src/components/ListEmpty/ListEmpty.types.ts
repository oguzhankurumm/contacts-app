import { StyleProp, TextStyle, ViewStyle } from "react-native";

import { CustomTextPropsTypes } from "../CustomText/CustomText.types";

type ListEmptyPropsTypes = {
  overrideText?: string;
  overrideDescription?: string;
  overrideIcon?: any;
  restTextProps?: CustomTextPropsTypes;
  overrideTextStyle?: StyleProp<TextStyle>;
  overrideDescriptionStyle?: StyleProp<TextStyle>;
  restDescriptionProps?: CustomTextPropsTypes;
  overrideContainerStyle?: StyleProp<ViewStyle>;
};

export type { ListEmptyPropsTypes };
