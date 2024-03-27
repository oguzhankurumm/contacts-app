import React, { useMemo } from "react";
import { View } from "react-native";
import countries from "_assets/data/countries.json";

import CustomText from "../CustomText/CustomText.component";
import styles from "./CountryPicker.style";
import { CountryPickerPropsTypes } from "./CountryPicker.types";
import { Dropdown } from "react-native-element-dropdown";

const CountryPicker: React.FC<CountryPickerPropsTypes> = ({
  title = "",
  disabled = false,
  country = "Türkiye",
  onSelect = () => {},
  error,
  overrideContainerStyle,
  overrideTitleFontStyle = "bodyMedium",
  overrideTitleStyle,
  hintText,
  overrideHintTextFontStyle = "bodyMedium",
  overrideHintTextStyle,
}) => {
  const {
    container,
    disabledContainer,
    placeholderStyle,
    selectedTextStyle,
    disabledText,
    searchInputStyle,
    titleStyle,
    hintTextStyle,
    errorHintTextStyle,
  } = useMemo(() => styles(), []);

  return (
    <View style={[overrideContainerStyle]}>
      {!!title && typeof title === "string" && (
        <CustomText
          text={title}
          textFontStyle={overrideTitleFontStyle}
          overrideStyle={[titleStyle, overrideTitleStyle]}
        />
      )}
      <Dropdown
        style={[container, disabled && disabledContainer]}
        selectedTextStyle={[selectedTextStyle, disabled && disabledText]}
        placeholderStyle={placeholderStyle}
        maxHeight={200}
        value={country}
        disable={disabled}
        data={countries}
        valueField="country"
        labelField="country"
        placeholder="Select Country"
        onChange={({ code, country }) => onSelect(country, code)}
        search
        searchField="country"
        searchPlaceholder="Search country..."
        inputSearchStyle={searchInputStyle}
      />
      {((!!error && typeof error === "string") ||
        (!!hintText && typeof hintText === "string")) && (
        <CustomText
          text={!!error && typeof error === "string" ? error : hintText}
          textFontStyle={overrideHintTextFontStyle}
          overrideStyle={[
            error ? errorHintTextStyle : hintTextStyle,
            overrideHintTextStyle,
          ]}
        />
      )}
    </View>
  );
};

export default CountryPicker;
