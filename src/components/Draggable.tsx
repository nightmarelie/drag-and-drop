import React, { FC, ReactNode } from "react";

import { useStyles, Rule } from "hooks";

type Props = {
  id: string;
  children: () => ReactNode | ReactNode[];
};

export const Draggable: FC<Props> = ({ id, children }) => {
  const { css } = useStyles();
  return (
    <div className={css(draggable)} dara-draggable={id}>
      {children()}
    </div>
  );
};

const draggable: Rule = {
  border: "2px solid red",
  display: "inline-block",
};
