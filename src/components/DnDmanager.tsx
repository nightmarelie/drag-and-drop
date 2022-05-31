import React, { FC, ReactNode } from "react";
import { DnDmanagerProvired } from "contexts";

type Props = {
  children: ReactNode | ReactNode[];
};

export const DnDmanager: FC<Props> = ({ children }) => {
  return <DnDmanagerProvired>{children}</DnDmanagerProvired>;
};
