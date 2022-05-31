import React, { ReactNode, FC } from "react";

import { useStyles, Rule } from "hooks";

type Props = {
  children: () => ReactNode | ReactNode[];
};

export const Droppable: FC<Props> = ({ children }) => {
  const { css } = useStyles();

  return <div className={css(droppable)}>{children()}</div>;
};

const droppable: Rule = {
  border: "2px solid black",
};
