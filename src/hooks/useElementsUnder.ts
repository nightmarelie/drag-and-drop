import { useEffect, useState, useCallback } from "react";

type Props = (x: number, y: number) => void;

export const useElementsUnder: Props = (x, y) => {
  const [elements, setElements] = useState<Element[]>([] as Element[]);

  const handleElements = useCallback(() => {
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

  useEffect(handleElements);

  return elements;
};
