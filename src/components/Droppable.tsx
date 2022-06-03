import React, {
  ReactNode,
  forwardRef,
  useRef,
  MutableRefObject,
  useImperativeHandle,
} from "react";

import { useStyles, Rule } from "hooks";

type Props = {
  id: string;
  children: ReactNode | ReactNode[];
};

export const Droppable = forwardRef<HTMLDivElement | undefined, Props>(
  ({ id, children }, ref) => {
    const innerRef =
      useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

    useImperativeHandle(ref, () => innerRef.current);

    const { css } = useStyles();

    return (
      <div ref={innerRef} className={css(droppable)} data-droppable={id}>
        {children}
      </div>
    );
  }
);

const droppable: Rule = {
  border: "2px solid black",
  padding: "10px",
  display: "flex",
  gap: "10px",
  justifyContent: "flex-start",
  alignItems: "center",
};
