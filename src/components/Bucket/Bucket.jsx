import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  withStyles
} from "@material-ui/core";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./Bucket.styles";
import { globalBuckets } from "../../constants";

function Bucket({ classes, bucketName, items, type, droppableBucket }) {
  return (
    <Paper className={classes.root} elevation={1}>
      <Typography variant="h6" component="h6">
        {bucketName}
      </Typography>
      <Droppable
        droppableId={`${type}-${bucketName}-Droppable`}
        isDropDisabled={
          [...globalBuckets, bucketName].indexOf(droppableBucket) < 0
        }
      >
        {(provided, snapshot) => (
          <div
            className={classnames(
              classes.list,
              snapshot.isDraggingOver && classes.listDragged
            )}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <List dense={true}>
              {items && items[bucketName]
                ? items[bucketName].map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={`${type}-${item.id}`}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <RootRef rootRef={provided.innerRef}>
                          <ListItem
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                            classes={{
                              root: snapshot.isDragging
                                ? classes.listItemDragged
                                : undefined
                            }}
                          >
                            <ListItemText
                              primary={item.content}
                              classes={{
                                primary: snapshot.isDragging
                                  ? classes.listItemTextDragged
                                  : undefined
                              }}
                            />
                          </ListItem>
                        </RootRef>
                      )}
                    </Draggable>
                  ))
                : null}
              {provided.placeholder}
            </List>
          </div>
        )}
      </Droppable>
    </Paper>
  );
}

Bucket.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bucket);
