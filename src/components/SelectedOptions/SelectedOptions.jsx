import React from "react";
import OptionsSelector from "../OptionsSelector/OptionsSelector";

function SelectedOptions({
  className,
  selectedItems,
  droppableBucket,
  stages
}) {
  return (
    <OptionsSelector
      className={className}
      items={selectedItems}
      title="Selected Options"
      type="selected"
      droppableBucket={droppableBucket}
      stages={stages}
    />
  );
}

export default SelectedOptions;
