import { useCallback, useEffect, useState, useMemo } from "react";

type MouseState = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  isLeftClick: boolean;
  isPrevLeftClick: boolean;
  event: MouseEvent;
};

type MouseEvents = keyof Pick<
  WindowEventMap,
  "mousedown" | "mouseup" | "mousemove"
>;

type MouseListener = (this: Window, ev: WindowEventMap[MouseEvents]) => any;

type GenericListener = (
  this: Window,
  ev: WindowEventMap[keyof WindowEventMap]
) => any;

export const useMouse = () => {
  const [mouse, setMouse] = useState<MouseState>({
    x: -1,
    y: -1,
    dx: 0,
    dy: 0,
    isLeftClick: false,
    isPrevLeftClick: false,
    event: new MouseEvent("mousemove"),
  });

  const handleMouseEvent = useCallback(
    (
      event: MouseEvent,
      prevState: MouseState,
      overrideState: Partial<MouseState>
    ): MouseState => ({
      ...prevState,
      x: event.clientX,
      y: event.clientY,
      dx: 0,
      dy: 0,
      event,
      isPrevLeftClick: prevState.isLeftClick,
      ...overrideState,
    }),
    []
  );

  const handleMouseDown: MouseListener = useCallback(
    (event: MouseEvent) =>
      setMouse((prevMouse) =>
        event.button === 0
          ? handleMouseEvent(event, prevMouse, {
              isLeftClick: true,
            })
          : prevMouse
      ),
    [handleMouseEvent]
  );

  const handleMouseUp: MouseListener = useCallback(
    (event: MouseEvent) =>
      setMouse((prevMouse) =>
        event.button === 0
          ? handleMouseEvent(event, prevMouse, {
              isLeftClick: false,
            })
          : prevMouse
      ),
    [handleMouseEvent]
  );

  const handleMouseMove: MouseListener = useCallback(
    (event: MouseEvent) =>
      setMouse((prevMouse) =>
        handleMouseEvent(event, prevMouse, {
          dx: event.clientX - prevMouse.x,
          dy: event.clientY - prevMouse.y,
        })
      ),
    [handleMouseEvent]
  );

  const events: [MouseEvents, MouseListener][] = useMemo(
    () => [
      ["mousedown", handleMouseDown],
      ["mouseup", handleMouseUp],
      ["mousemove", handleMouseMove],
    ],
    [handleMouseDown, handleMouseUp, handleMouseMove]
  );

  useEffect(() => {
    events.forEach(([type, handler]) =>
      document.addEventListener(type, handler as GenericListener)
    );

    return () => {
      events.forEach(([type, handler]) =>
        document.removeEventListener(type, handler as GenericListener)
      );
    };
  }, [events]);

  return mouse;
};
