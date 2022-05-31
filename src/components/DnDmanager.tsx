import React, { FC, ReactNode } from "react";

import { DnDmanagerProvired } from "contexts";
import { useMouse } from "hooks";
import { useEffect } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export const DnDmanager: FC<Props> = ({ children }) => {
  const { x, y, dx, dy, isLeftClick, isPrevLeftClick } = useMouse();

  useEffect(() => {
    console.log(x, y, dx, dy, isLeftClick, isPrevLeftClick);
  });

  return <DnDmanagerProvired>{children}</DnDmanagerProvired>;
};
