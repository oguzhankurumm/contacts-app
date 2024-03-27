import { ImageSourcePropType, ViewStyle } from "react-native";

export type ContactCardProps = {
  avatar: ImageSourcePropType;
  firstName: string;
  lastName: string;
  phoneCode: string;
  phoneNumber: string;
  onItemPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  containerStyle?: ViewStyle;
};
