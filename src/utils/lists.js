// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
export const move = (source, destination, sourceIndex, destinationIndex) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination || []);
  const [removed] = sourceClone.splice(sourceIndex, 1);

  destClone.splice(destinationIndex, 0, removed);

  const result = { source: sourceClone, destination: destClone };
  return result;
};
