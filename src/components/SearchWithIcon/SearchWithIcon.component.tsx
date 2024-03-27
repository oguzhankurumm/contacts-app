import React, { useMemo } from "react";
import { View } from "react-native";

import CustomTextInput from "../CustomTextInput/CustomTextInput.component";
import styles from "./SearchWithIcon.style";
import { SearchWithIconPropsTypes } from "./SearchWithIcon.types";
import { Ionicons } from "@expo/vector-icons";
import { scale } from "_styles/scaling";
import colors from "_styles/colors";

const SearchWithIcon: React.FC<SearchWithIconPropsTypes> = ({
  overrideContainerStyle,
  overrideRowContainerStyle,
  searchHandler = () => {},
  overrideSearchInputContainerStyle,
  overridePlaceholderTextColor,
  placeholder,
  restSearchInputProps,
  onSubmitSearch = () => {},
}) => {
  const { searchIconStyle, rowContainer, searchInputContainer } = useMemo(
    () => styles(),
    []
  );

  const placeholderTextColor = useMemo(
    () => overridePlaceholderTextColor ?? colors?.otherColors?.white,
    [overridePlaceholderTextColor, colors?.otherColors?.white]
  );

  return (
    <View style={overrideContainerStyle}>
      <View style={[rowContainer, overrideRowContainerStyle]}>
        <CustomTextInput
          handleChange={searchHandler}
          overrideContainerStyle={[
            searchInputContainer,
            overrideSearchInputContainerStyle,
          ]}
          overridePlaceholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          leftChild={
            <Ionicons
              name="search"
              size={scale(24)}
              color={colors?.otherColors?.white}
              style={searchIconStyle}
            />
          }
          onSubmitEditing={onSubmitSearch}
          restTextInputProps={restSearchInputProps}
        />
      </View>
    </View>
  );
};

export default SearchWithIcon;
