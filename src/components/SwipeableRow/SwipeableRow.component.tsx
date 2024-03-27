import React, { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Animated, View } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "_styles/colors";
import { SwipeableRowProps } from "./SwipeableRow.types";
import styles from "./SwipeableRow.style";
import { scale } from "_styles/scaling";

const SwipeableRow: React.FC<SwipeableRowProps> = ({
  children,
  onItemPress,
  onDelete,
  onEdit,
  overrideContainerStyle,
}) => {
  const { container, actionItem } = useMemo(() => styles(), []);

  const renderRightAction = (
    iconName: typeof Ionicons.defaultProps.name,
    color: string,
    progress: Animated.AnimatedInterpolation<number>,
    onPress?: () => void
  ) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [scale(75), 0],
    });

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[actionItem, { backgroundColor: color }]}
          onPress={onPress}
        >
          <Ionicons
            name={iconName}
            size={scale(24)}
            color={colors?.otherColors?.white}
          />
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    _dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => (
    <View style={container}>
      {renderRightAction(
        "eye",
        colors?.neutralColors?.neutral100,
        progress,
        onItemPress
      )}
      {renderRightAction(
        "pencil",
        colors?.neutralColors?.neutral100,
        progress,
        onEdit
      )}
      {renderRightAction(
        "trash",
        colors?.otherColors?.danger,
        progress,
        onDelete
      )}
    </View>
  );

  return (
    <Swipeable
      containerStyle={overrideContainerStyle}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={40}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};

export default SwipeableRow;
