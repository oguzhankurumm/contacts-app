import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { TextStyleTypes } from '_styles/typography';

type CustomButtonPropsTypes = {
  onPress: () => void;
  overrideStyle?: StyleProp<ViewStyle>;
  title: string;
  overrideFontStyle?: TextStyleTypes;
  overrideTitleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  activeOpacity?: number;
};

export type { CustomButtonPropsTypes };
