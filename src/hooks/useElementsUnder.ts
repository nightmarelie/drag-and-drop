import { useEffect, useState } from "react";

type Props = (x: number, y: number) => void;

export const useElementsUnder: Props = (x, y) => {
  const [elements, setElements] = useState<Element[]>([] as Element[]);

  useEffect(() => {
    setElements((elements) => {
      const nextElements = document.elementsFromPoint(x, y);

      if (
        nextElements.length !== elements.length ||
        nextElements.some((el) => !elements.includes(el))
      ) {
        return nextElements;
      }

      return elements;
    });
  }, [x, y]);

  return elements;
};
