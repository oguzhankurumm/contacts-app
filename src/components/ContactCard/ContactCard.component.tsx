import React, { useMemo } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CustomText from "../CustomText/CustomText.component";
import CustomImage from "../CustomImage/CustomImage.component";
import SwipeableRow from "../SwipeableRow/SwipeableRow.component";

import { styles } from "./ContactCard.styles";
import { ContactCardProps } from "./ContactCard.types";
import colors from "_styles/colors";
import { scale } from "_styles/scaling";

const ContactCard: React.FC<ContactCardProps> = ({
  avatar,
  firstName,
  lastName,
  phoneCode,
  phoneNumber,
  onItemPress,
  onEdit,
  onDelete,
  containerStyle,
}) => {
  const { container, textContainer, avatarStyle, phoneNumberText } = useMemo(
    () => styles(),
    []
  );

  return (
    <SwipeableRow onEdit={onEdit} onDelete={onDelete} onItemPress={onItemPress}>
      <View style={[container, containerStyle]}>
        <CustomImage source={avatar} overrideStyle={avatarStyle} />
        <View style={textContainer}>
          <CustomText
            text={`${firstName} ${lastName}`}
            textFontStyle="bodyLargeSemibold2"
          />
          <CustomText
            text={`+${phoneCode} ${phoneNumber}`}
            textFontStyle="bodyMedium"
            overrideStyle={phoneNumberText}
          />
        </View>
        <Ionicons
          name="chevron-forward"
          size={scale(24)}
          color={colors?.neutralColors?.neutral300}
        />
      </View>
    </SwipeableRow>
  );
};

export default ContactCard;
