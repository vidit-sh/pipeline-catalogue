import React from "react";
import {
  ListItem,
  RootRef,
  ListItemText,
  withStyles,
  IconButton
} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@material-ui/icons/Delete";

import styles from "./DraggableItem.styles";

function DraggableItem({
  classes,
  index,
  item,
  type,
  bucketName,
  onDeleteClick,
  showDeleteButton
}) {
  return (
    <Draggable draggableId={`${type}-${bucketName}-${item.Name}`} index={index}>
      {(provided, snapshot) => (
        <RootRef rootRef={provided.innerRef}>
          <ListItem
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
            classes={{
              root: snapshot.isDragging ? classes.listItemDragged : undefined
            }}
          >
            <ListItemText
              primary={item.Name}
              classes={{
                primary: snapshot.isDragging
                  ? classes.listItemTextDragged
                  : undefined
              }}
            />
            {showDeleteButton ? (
              <IconButton
                color="primary"
                className={classes.iconButton}
                onClick={onDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
            ) : null}
          </ListItem>
        </RootRef>
      )}
    </Draggable>
  );
}

export default withStyles(styles)(DraggableItem);
