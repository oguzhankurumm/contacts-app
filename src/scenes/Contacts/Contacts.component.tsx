import { useMemo } from "react";
import { TouchableOpacity, ImageSourcePropType, View } from "react-native";
import styles from "./Contacts.style";
import {
  AppWrapper,
  ContactCard,
  CustomText,
  ListEmpty,
  SearchWithIcon,
} from "_components";
import { AlphabetList } from "react-native-section-alphabet-list";
import { useContacts } from "./hooks/useContacts.hook";
import { Ionicons } from "@expo/vector-icons";
import colors from "_styles/colors";
import { scale } from "_styles/scaling";

const Contacts = () => {
  const {
    formattedContacts,
    handleAdd,
    handleDelete,
    handleEdit,
    onItemPress,
  } = useContacts();

  const {
    container,
    contactContainerStyle,
    headerContainer,
    actionButton,
    indexLetterStyle,
    indexContainerStyle,
    listHeaderStyle,
  } = useMemo(() => styles(), []);

  return (
    <AppWrapper>
      <View style={headerContainer}>
        <SearchWithIcon placeholder="Search people..." />
      </View>
      <AlphabetList
        data={formattedContacts}
        stickySectionHeadersEnabled
        indexLetterStyle={indexLetterStyle}
        indexContainerStyle={indexContainerStyle}
        style={container}
        renderCustomItem={(item: any) => (
          <ContactCard
            key={item?.id}
            avatar={item?.avatar as ImageSourcePropType}
            firstName={item?.firstName}
            lastName={item?.lastName}
            phoneCode={item?.phoneCode}
            phoneNumber={item?.phoneNumber}
            onItemPress={() => onItemPress(item?.id)}
            onDelete={() => handleDelete(item?.id)}
            onEdit={() => handleEdit(item?.id)}
            containerStyle={contactContainerStyle}
          />
        )}
        renderCustomSectionHeader={(section) => (
          <View style={listHeaderStyle}>
            <CustomText text={section.title} textFontStyle="bodyMedium" />
          </View>
        )}
        ListEmptyComponent={
          <ListEmpty
            overrideText="No contacts found."
            overrideDescription="Add a new contact to get started."
          />
        }
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={actionButton}
        onPress={handleAdd}
      >
        <Ionicons
          name="add"
          size={scale(32)}
          color={colors?.otherColors?.white}
        />
      </TouchableOpacity>
    </AppWrapper>
  );
};

export default Contacts;
