import { TextStyleTypes } from "_styles/typography";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

type CountryPickerPropsTypes = {
  title?: string;
  disabled?: boolean;
  onSelect?: (country: string, code: string) => void;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideTitleFontStyle?: TextStyleTypes;
  overrideTitleStyle?: StyleProp<TextStyle>;
  country?: string;
  error?: string | boolean;
  placeholder?: string;
  overrideErrorTextStyle?: StyleProp<TextStyle>;
  hintText?: string;
  overrideHintTextFontStyle?: TextStyleTypes;
  overrideHintTextStyle?: StyleProp<TextStyle>;
};

export type { CountryPickerPropsTypes };
