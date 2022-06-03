import React, {
  forwardRef,
  MutableRefObject,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

import { useStyles, Rule } from "hooks";

type Props = {
  id: string;
  children: ReactNode | ReactNode[];
};

export const Draggable = forwardRef<HTMLDivElement | undefined, Props>(
  ({ id, children }, ref) => {
    const innerRef =
      useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

    useImperativeHandle(ref, () => innerRef.current);

    const { css } = useStyles();

    useEffect(() => {
      innerRef.current &&
        console.log("clientWidth: ", innerRef.current.clientWidth);
    }, []);

    return (
      <div ref={innerRef} className={css(draggable)} dara-draggable={id}>
        {children}
      </div>
    );
  }
);

const draggable: Rule = {
  border: "2px solid red",
  display: "inline-block",
};
