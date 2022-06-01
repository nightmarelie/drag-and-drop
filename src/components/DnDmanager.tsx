import React, { FC, ReactNode, useEffect } from "react";

import { DnDmanagerProvired } from "contexts";
import { useMouse, useElementsUnder } from "hooks";

type Props = {
  children: ReactNode | ReactNode[];
};

export const DnDmanager: FC<Props> = ({ children }) => {
  const mouse = useMouse();
  const elements = useElementsUnder(mouse.x, mouse.y);

  useEffect(() => {
    console.log(mouse);
    console.log(elements);
  }, [elements]);

  return <DnDmanagerProvired>{children}</DnDmanagerProvired>;
};
