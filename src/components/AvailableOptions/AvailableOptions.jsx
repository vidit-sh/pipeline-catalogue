import React from "react";
import OptionsSelector from "../OptionsSelector/OptionsSelector";

function AvailableOptions({ className, availableItems, droppableBucket }) {
  return (
    <OptionsSelector
      className={className}
      items={availableItems}
      title="Available Options"
      type="available"
      droppableBucket={droppableBucket}
    />
  );
}

export default AvailableOptions;
