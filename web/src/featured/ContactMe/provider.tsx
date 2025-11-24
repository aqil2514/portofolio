"use client";

import React, { createContext, useContext, useState } from "react";

export type ContactVia = "whatsapp" | "email";

interface ContactContextType {
  via: ContactVia;
  setVia: React.Dispatch<React.SetStateAction<ContactVia>>;
}

const ContactContext = createContext<ContactContextType>(
  {} as ContactContextType
);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [via, setVia] = useState<ContactVia>("whatsapp");

  const value: ContactContextType = {
    setVia,
    via,
  };

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

export const useContactContext = () => useContext(ContactContext);
