import { ContactType } from "_types/index";
import { create } from "zustand";

export interface ContactState {
    contacts: Array<ContactType>;
    addContact: (contact: ContactType) => void;
    editContact: (contact: ContactType) => void;
    removeContact: (id: string) => void;
};

const useContactsStore = create<ContactState>((set) => ({
    contacts: [],
    addContact: (contact: ContactType) => set((state) => ({ contacts: [...state.contacts, contact] })),
    editContact: (contact: ContactType) => set((state) => ({ contacts: state.contacts.map((c) => c.id === contact.id ? contact : c) })),
    removeContact: (id: string) => set((state) => ({ contacts: state.contacts.filter((c) => c.id !== id) })),
}));

export default useContactsStore;