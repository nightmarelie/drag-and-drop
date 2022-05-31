import React, { createContext, FC } from "react";

type DnDmanager = {};

export const DnDmanagerContext = createContext<DnDmanager>({} as DnDmanager);

export const DnDmanagerProvired: FC<any> = ({ children }) => {
  return (
    <DnDmanagerContext.Provider value={{}}>
      {children}
    </DnDmanagerContext.Provider>
  );
};
