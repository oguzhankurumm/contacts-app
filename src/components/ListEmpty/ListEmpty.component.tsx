import React, { useMemo } from "react";
import { View } from "react-native";

import CustomText from "../CustomText/CustomText.component";
import styles from "./ListEmpty.style";
import { ListEmptyPropsTypes } from "./ListEmpty.types";
import { Ionicons } from "@expo/vector-icons";
import colors from "_styles/colors";
import { scale } from "_styles/scaling";

const ListEmpty: React.FC<ListEmptyPropsTypes> = ({
  overrideIcon,
  overrideText,
  restTextProps,
  overrideDescription,
  restDescriptionProps,
  overrideTextStyle,
  overrideDescriptionStyle,
  overrideContainerStyle,
}) => {
  const { container, textStyle, descriptionStyle } = useMemo(
    () => styles(),
    []
  );

  return (
    <View style={[container, overrideContainerStyle]}>
      <Ionicons
        name={overrideIcon || "person"}
        size={scale(96)}
        color={colors?.primaryColors?.primary300}
      />
      <CustomText
        textFontStyle="h4"
        overrideStyle={[textStyle, overrideTextStyle]}
        text={overrideText}
        {...restTextProps}
      />
      <CustomText
        textFontStyle="bodyLargeRegular"
        overrideStyle={[descriptionStyle, overrideDescriptionStyle]}
        text={overrideDescription}
        {...restDescriptionProps}
      />
    </View>
  );
};

export default ListEmpty;
