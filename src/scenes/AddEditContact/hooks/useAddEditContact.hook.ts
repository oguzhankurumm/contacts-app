import useContactsStore from "_store/contactsStore";
import { useCallback, useEffect } from "react";
import * as Yup from "yup";
import { ContactType } from "_types/index";
import { generateRandomUid, getRandomAvatar } from "_utils/helpers";
import { Alert, Keyboard } from "react-native";
import NavigationServices from "_navigations/NavigationServices";
import { useNavigation } from "@react-navigation/core";

const useAddEditContact = () => {
  const navigation = useNavigation();
  const { addContact, updateContact, selectedContact, mode } =
    useContactsStore();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").notRequired(),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    country: Yup.string().required("Country is required"),
    phoneCode: Yup.string().required("Phone Code is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
  });

  useEffect(() => {
    const headerTitle =
      mode === "add"
        ? "Add Contact"
        : mode === "edit"
        ? "Edit Contact"
        : `${selectedContact?.firstName} ${selectedContact?.lastName}`;
    navigation.setOptions({
      headerTitle,
    });
  }, [mode, navigation]);

  const initialValues =
    mode === "edit" || mode === "view"
      ? selectedContact
      : {
          email: "",
          firstName: "",
          lastName: "",
          country: "Türkiye",
          phoneCode: "90",
          phoneNumber: "",
        };

  const handleSave = useCallback(
    async (data: ContactType) => {
      Keyboard.dismiss();
      try {
        if (mode === "edit") {
          updateContact(data);
          NavigationServices.goBack();
          Alert.alert("Success", "Contact edited successfully");
        } else {
          const contact = {
            ...data,
            id: generateRandomUid(),
            avatar: getRandomAvatar(),
          };
          addContact(contact);
          NavigationServices.goBack();
          Alert.alert("Success", "Contact added successfully");
        }
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    },
    [addContact, updateContact, mode]
  );

  return {
    validationSchema,
    initialValues,
    handleSave,
  };
};

export { useAddEditContact };
