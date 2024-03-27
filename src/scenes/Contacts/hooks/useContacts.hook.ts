import { useCallback, useState } from "react";

import useContactsStore from "_store/contactsStore";
import Scenes from "_navigations/Scenes";
import { Alert } from "react-native";
import NavigationServices from "_navigations/NavigationServices";
import { ContactType } from "_types/index";

const useContacts = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { contacts, removeContact, setSelectedContact, setMode } =
    useContactsStore();

  const onItemPress = useCallback((id: string) => {
    const contact = contacts.find((c) => c.id === id);
    setSelectedContact(contact as ContactType);
    setMode("view");
    NavigationServices.navigate(Scenes.addEditContact);
  }, []);

  const handleAdd = useCallback(() => {
    NavigationServices.navigate(Scenes.addEditContact);
    setSelectedContact(null);
    setMode("add");
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      Alert.alert("Delete", "Are you sure you want to delete this contact?", [
        {
          text: "Cancel",
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
    const contact = contacts.find((c) => c.id === id);
    setSelectedContact(contact as ContactType);
    setMode("edit");
    NavigationServices.navigate(Scenes.addEditContact);
  }, []);

  const formattedContacts = useCallback((contacts: ContactType[]) => {
    return contacts?.map((contact: ContactType) => ({
      ...contact,
      key: contact.id,
      value: `${contact.firstName} ${contact.lastName}`,
    }));
  }, []);

  const filteredContacts = contacts.filter(
    (contact) => {
      return (
        contact.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    [searchQuery]
  );

  return {
    setSearchQuery,
    onItemPress,
    handleAdd,
    handleDelete,
    handleEdit,
    formattedContacts: formattedContacts(filteredContacts),
  };
};

export { useContacts };
