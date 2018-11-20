import React from "react";
import OptionsSelector from "../OptionsSelector/OptionsSelector";

function AvailableOptions({
  className,
  availableItems,
  droppableBucket,
  stages
}) {
  return (
    <OptionsSelector
      className={className}
      items={availableItems}
      title="Available Options"
      type="available"
      droppableBucket={droppableBucket}
      stages={stages}
    />
  );
}

export default AvailableOptions;
