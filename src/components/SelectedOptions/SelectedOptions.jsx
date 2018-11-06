import React from "react";
import OptionsSelector from "../OptionsSelector/OptionsSelector";

function SelectedOptions({ className, selectedItems, droppableBucket }) {
  return (
    <OptionsSelector
      className={className}
      items={selectedItems}
      title="Selected Options"
      type="selected"
      droppableBucket={droppableBucket}
    />
  );
}

export default SelectedOptions;
