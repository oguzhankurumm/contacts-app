import { View } from "react-native";
import styles from "./AddEditContact.style";
import { useMemo } from "react";
import {
  AppWrapper,
  CustomButton,
  CustomImage,
  KeyboardAvoiding,
  LabeledTextInput,
} from "_components";
import { useAddEditContact } from "./hooks/useAddEditContact.hook";
import { Formik } from "formik";
import { ContactType } from "_types/index";

const AddEditContact = () => {
  const {
    headerContainer,
    imageStyle,
    contentContainer,
    inputContainer,
    buttonContainer,
  } = useMemo(() => styles(), []);

  const { handleSave, validationSchema, initialValues } = useAddEditContact();

  return (
    <AppWrapper>
      <Formik
        initialValues={initialValues}
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
              <CustomImage overrideStyle={imageStyle} />
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
              />
              <LabeledTextInput
                title="Phone Code"
                keyboardType="number-pad"
                inputValue={values.phoneCode}
                maxLength={2}
                placeholder="Phone Code"
                handleChange={handleChange("phoneCode")}
                onBlur={handleBlur("phoneCode")}
                error={touched.phoneCode && (errors.phoneCode as string)}
                overrideContainerStyle={inputContainer}
              />
              <LabeledTextInput
                title="Phone Number"
                keyboardType="number-pad"
                inputValue={values.phoneNumber}
                maxLength={10}
                placeholder="Phone Number"
                handleChange={handleChange("phoneNumber")}
                onBlur={handleBlur("phoneNumber")}
                error={touched.phoneNumber && (errors.phoneNumber as string)}
                overrideContainerStyle={inputContainer}
              />
            </View>
            <CustomButton
              title="Save"
              onPress={handleSubmit}
              overrideStyle={buttonContainer}
            />
          </KeyboardAvoiding>
        )}
      </Formik>
    </AppWrapper>
  );
};

export default AddEditContact;
