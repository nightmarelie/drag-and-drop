import React, { ReactNode, FC } from "react";

import { useStyles, Rule } from "hooks";

type Props = {
  id: string;
  children: () => ReactNode | ReactNode[];
};

export const Droppable: FC<Props> = ({ id, children }) => {
  const { css } = useStyles();

  return (
    <div className={css(droppable)} data-droppable={id}>
      {children()}
    </div>
  );
};

const droppable: Rule = {
  border: "2px solid black",
  padding: "10px",
  display: "flex",
  gap: "10px",
  justifyContent: "flex-start",
  alignItems: "center",
};
