import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";

import CustomText from "../CustomText/CustomText.component";
import styles from "./CustomButton.style";
import { CustomButtonPropsTypes } from "./CustomButton.types";

const CustomButton: React.FC<CustomButtonPropsTypes> = ({
  onPress = () => {},
  overrideStyle,
  title = "",
  overrideFontStyle = "buttonBig",
  overrideTitleStyle,
  disabled = false,
  activeOpacity = 0.8,
}) => {
  const { containerStyle, textStyle, disabledStyle } = useMemo(
    () => styles(),
    []
  );

  return (
    <TouchableOpacity
      style={[containerStyle, overrideStyle, disabled && disabledStyle]}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled}
    >
      <CustomText
        overrideStyle={[textStyle, overrideTitleStyle]}
        text={title}
        textFontStyle={overrideFontStyle}
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
