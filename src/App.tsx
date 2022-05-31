import React from "react";

import { DnDmanager, Draggable, Droppable } from "components";
import { StylesProvider } from "contexts";

const App = () => {
  return (
    <StylesProvider>
      <DnDmanager>
        <Droppable id={"1"}>
          {() => (
            <>
              <Draggable id={"a1"}>{() => "draggable"}</Draggable>
              <Draggable id={"b1"}>{() => "draggable"}</Draggable>
              <Draggable id={"c1"}>{() => "draggable"}</Draggable>
            </>
          )}
        </Droppable>
        <Droppable id={"2"}>
          {() => (
            <>
              <Draggable id={"a2"}>{() => "draggable"}</Draggable>
            </>
          )}
        </Droppable>
      </DnDmanager>
    </StylesProvider>
  );
};

export default App;
