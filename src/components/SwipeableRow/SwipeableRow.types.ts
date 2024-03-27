import { StyleProp, ViewStyle } from "react-native";

type SwipeableRowProps = {
  children?: React.ReactNode;
  overrideContainerStyle?: StyleProp<ViewStyle>;
  overrideStyle?: StyleProp<ViewStyle>;
  onItemPress?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
};

export type { SwipeableRowProps };
