import React, { useMemo } from "react";

import { Image } from "expo-image";

import styles from "./CustomImage.style";
import { CustomImagePropsTypes } from "./CustomImage.types";
import imagesObject from "_assets/images/imagesObject";

const defaultPlaceHolder = imagesObject?.userPlaceholder;

const CustomImage: React.FC<CustomImagePropsTypes> = ({
  source,
  overrideStyle,
  overrideResizeMode = "cover",
  placeholder,
}) => {
  const { imageStyle } = useMemo(() => styles(), []);

  return (
    <Image
      source={source ?? defaultPlaceHolder}
      style={overrideStyle ?? imageStyle}
      contentFit={source ? overrideResizeMode : "cover"}
      recyclingKey={source?.toString()}
      placeholder={placeholder}
      placeholderContentFit={overrideResizeMode}
      transition={200}
    />
  );
};

export default CustomImage;
