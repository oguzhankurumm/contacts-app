import { useCallback } from "react";

import useContactsStore from "_store/contactsStore";
import Scenes from "_navigations/Scenes";
import { Alert } from "react-native";
import NavigationServices from "_navigations/NavigationServices";
import { ContactType } from "_types/index";

const useContacts = () => {
  const { contacts, removeContact } = useContactsStore();

  const onItemPress = useCallback((id: string) => {
    NavigationServices.navigate(Scenes.addEditContact, { id });
  }, []);

  const handleAdd = useCallback(() => {
    NavigationServices.navigate(Scenes.addEditContact);
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      Alert.alert("Delete", "Are you sure you want to delete this contact?", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => removeContact(id),
          style: "destructive",
        },
      ]);
    },
    [removeContact]
  );

  const handleEdit = useCallback((id: string) => {
    NavigationServices.navigate(Scenes.addEditContact, { id });
  }, []);

  const formattedContacts = useCallback((contacts: ContactType[]) => {
    return contacts?.map((contact: ContactType) => ({
      ...contact,
      key: contact.id,
      value: `${contact.firstName} ${contact.lastName}`,
    }));
  }, []);

  return {
    onItemPress,
    handleAdd,
    handleDelete,
    handleEdit,
    formattedContacts: formattedContacts(contacts),
  };
};

export { useContacts };
