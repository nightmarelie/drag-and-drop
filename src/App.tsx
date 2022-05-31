import React from "react";

import { DnDmanager, Draggable, Droppable } from "components";
import { StylesProvider } from "contexts";

const App = () => {
  return (
    <StylesProvider>
      <DnDmanager>
        <Droppable>{() => "droppable"}</Droppable>
        <Draggable>{() => "draggable"}</Draggable>
      </DnDmanager>
    </StylesProvider>
  );
};

export default App;
