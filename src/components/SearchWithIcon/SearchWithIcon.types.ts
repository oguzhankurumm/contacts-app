import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputProps,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';

type SearchWithIconPropsTypes = {
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideRowContainerStyle?: StyleProp<ViewStyle>;
  searchHandler?: (text: string) => void;
  overrideSearchInputContainerStyle?: StyleProp<ViewStyle>;
  overridePlaceholderTextColor?: string;
  placeholder?: string;
  restSearchInputProps?: TextInputProps;
  onSubmitSearch?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
};

export type { SearchWithIconPropsTypes };
