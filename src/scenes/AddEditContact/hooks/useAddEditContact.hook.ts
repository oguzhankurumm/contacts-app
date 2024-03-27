import useContactsStore from "_store/contactsStore";
import { useCallback, useState } from "react";
import * as Yup from "yup";
import { ContactType } from "_types/index";
import { generateRandomUid, getRandomAvatar } from "src/utils/helpers";
import { Alert, Keyboard } from "react-native";
import NavigationServices from "_navigations/NavigationServices";

const useAddEditContact = () => {
  const { addContact, editContact } = useContactsStore();

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneCode: Yup.number().required("Phone Code is required"),
    phoneNumber: Yup.number().required("Phone Number is required"),
  });

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    phoneCode: "",
    phoneNumber: "",
  };

  const handleSave = useCallback(
    async (data: ContactType) => {
      Keyboard.dismiss();
      try {
        if (isEditMode) {
          editContact(data);
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
    [addContact, editContact, isEditMode]
  );

  return {
    validationSchema,
    initialValues,
    handleSave,
  };
};

export { useAddEditContact };
