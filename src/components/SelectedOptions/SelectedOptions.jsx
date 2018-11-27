import React from "react";
import OptionsSelector from "../OptionsSelector/OptionsSelector";

function SelectedOptions({
  className,
  selectedItems,
  droppableBucket,
  stages,
  onDeleteClick
}) {
  return (
    <OptionsSelector
      className={className}
      items={selectedItems}
      title="Selected Options"
      type="selected"
      droppableBucket={droppableBucket}
      onDeleteClick={onDeleteClick}
    />
  );
}

export default SelectedOptions;
