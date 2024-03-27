import { ImageSourcePropType, ViewStyle } from "react-native";

export type ContactCardProps = {
  avatar: ImageSourcePropType;
  firstName: string;
  lastName: string;
  phoneCode: number;
  phoneNumber: number;
  onItemPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  containerStyle?: ViewStyle;
};
