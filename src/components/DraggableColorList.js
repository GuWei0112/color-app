import React from "react";
import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

export default SortableContainer(({ colors, removeColor }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          key={i}
          color={color.color}
          name={color.name}
          handleClick={name => removeColor(name)}
        />
      ))}
    </div>
  );
});
