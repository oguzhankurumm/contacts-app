import { ImageSourcePropType, View } from "react-native";
import styles from "./AddEditContact.style";
import { useMemo } from "react";
import {
  AppWrapper,
  CountryPicker,
  CustomButton,
  CustomImage,
  CustomText,
  KeyboardAvoiding,
  LabeledTextInput,
} from "_components";
import { useAddEditContact } from "./hooks/useAddEditContact.hook";
import { Formik } from "formik";
import { ContactType } from "_types/index";
import useContactsStore from "_store/contactsStore";

const AddEditContact = () => {
  const { mode } = useContactsStore();

  const {
    headerContainer,
    imageStyle,
    contentContainer,
    inputContainer,
    phoneCodeContainer,
    phoneCodeText,
    buttonContainer,
  } = useMemo(() => styles(), []);

  const { handleSave, validationSchema, initialValues } = useAddEditContact();

  return (
    <AppWrapper>
      <Formik
        initialValues={initialValues as ContactType}
        validationSchema={validationSchema}
        onSubmit={(data: unknown) => handleSave(data as ContactType)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          touched,
        }) => (
          <KeyboardAvoiding>
            <View style={headerContainer}>
              <CustomImage
                source={values.avatar as ImageSourcePropType}
                overrideStyle={imageStyle}
              />
            </View>
            <View style={contentContainer}>
              <LabeledTextInput
                title="First Name"
                keyboardType="default"
                inputValue={values.firstName}
                maxLength={50}
                placeholder="First Name"
                handleChange={handleChange("firstName")}
                onBlur={handleBlur("firstName")}
                error={touched.firstName && (errors.firstName as string)}
                overrideContainerStyle={inputContainer}
                disabled={mode === "view"}
              />
              <LabeledTextInput
                title="Last Name"
                keyboardType="default"
                inputValue={values.lastName}
                maxLength={50}
                placeholder="Last Name"
                handleChange={handleChange("lastName")}
                onBlur={handleBlur("lastName")}
                error={touched.lastName && (errors.lastName as string)}
                overrideContainerStyle={inputContainer}
                disabled={mode === "view"}
              />
              <LabeledTextInput
                title="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                inputValue={values.email}
                placeholder="Email"
                handleChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={touched.email && (errors.email as string)}
                overrideContainerStyle={inputContainer}
                disabled={mode === "view"}
              />
              <CountryPicker
                title="Country"
                country={values.country}
                error={touched.country && (errors.country as string)}
                onSelect={(country, code) => {
                  handleChange("country")(country);
                  handleChange("phoneCode")(code);
                }}
                overrideContainerStyle={inputContainer}
                disabled={mode === "view"}
              />
              <LabeledTextInput
                title="Phone Number"
                keyboardType="number-pad"
                inputValue={values.phoneNumber}
                maxLength={13}
                placeholder="Phone Number"
                handleChange={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                error={touched.phoneNumber && (errors.phoneNumber as string)}
                overrideContainerStyle={inputContainer}
                leftChild={
                  <View style={phoneCodeContainer}>
                    <CustomText
                      text={`+${values.phoneCode}`}
                      textFontStyle="bodyMediumSemibold"
                      overrideStyle={phoneCodeText}
                    />
                  </View>
                }
                disabled={mode === "view"}
              />
            </View>
            <CustomButton
              title="Save"
              onPress={handleSubmit}
              overrideStyle={buttonContainer}
              disabled={mode === "view"}
            />
          </KeyboardAvoiding>
        )}
      </Formik>
    </AppWrapper>
  );
};

export default AddEditContact;
