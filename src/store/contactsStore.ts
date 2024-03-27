import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { ContactType } from "_types/index";
import { zustandStorage } from "./storage";

type ModeTypes = "add" | "edit" | "view";

export interface ContactState {
  contacts: Array<ContactType>;
  mode: ModeTypes;
  setMode: (mode: ModeTypes) => void;
  selectedContact: ContactType | null;
  addContact: (contact: ContactType) => void;
  updateContact: (contact: ContactType) => void;
  removeContact: (id: string) => void;
  setSelectedContact: (contact: ContactType | null) => void;
}

const useContactsStore = create<ContactState>()(
  persist(
    (set, get) => ({
      contacts: [],
      mode: "view",
      setMode: (mode: ModeTypes) => set(() => ({ mode })),
      selectedContact: null,
      addContact: (contact: ContactType) =>
        set((state) => ({ contacts: [...state.contacts, contact] })),
      updateContact: (contact: ContactType) =>
        set((state) => ({
          contacts: state.contacts.map((c) =>
            c.id === contact.id ? contact : c
          ),
        })),
      removeContact: (id: string) =>
        set((state) => ({
          contacts: state.contacts.filter((c) => c.id !== id),
        })),
      setSelectedContact: (contact: ContactType | null) =>
        set(() => ({ selectedContact: contact })),
    }),
    {
      name: "contacts-store",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export default useContactsStore;
