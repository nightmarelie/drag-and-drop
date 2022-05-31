import React, { FC, ReactNode } from "react";

import { useStyles, Rule } from "hooks";

type Props = {
  children: () => ReactNode | ReactNode[];
};

export const Draggable: FC<Props> = ({ children }) => {
  const { css } = useStyles();
  return <div className={css(draggable)}>{children()}</div>;
};

const draggable: Rule = {
  border: "2px solid green",
};
