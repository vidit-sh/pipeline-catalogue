import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles,
  Grid,
  Typography
} from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";

import styles from "./SolutionTab.styles";
import AvailableOptions from "../AvailableOptions";
import SelectedOptions from "../SelectedOptions";
import { move, reorder } from "../../utils/lists";
import Configurations from "../Configurations";

class SolutionTab extends React.Component {
  state = {
    selectedArchetype: Object.keys(this.props.data)[0],
    availableItems: this.props.data[Object.keys(this.props.data)[0]],
    selectedItems: {},
    usedConfigs: new Set(),
    droppableBucket: null
  };

  handleChange = event => {
    this.setState({
      selectedArchetype: event.target.value,
      availableItems: this.props.data[event.target.value],
      selectedItems: {},
      usedConfigs: new Set()
    });
  };

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const { availableItems, selectedItems } = this.state;
    const [sourceColumn, sourceBucket] = source.droppableId.split("-");
    const [
      destinationColumn,
      destinationBucket
    ] = destination.droppableId.split("-");
    let sourceColumnItems, destinationColumnItems;

    if (sourceColumn === "available") {
      sourceColumnItems = availableItems;
      destinationColumnItems = selectedItems;
    } else {
      sourceColumnItems = selectedItems;
      destinationColumnItems = availableItems;
    }

    if (sourceColumn === destinationColumn) {
      const rearranged = reorder(
        sourceColumnItems[sourceBucket],
        source.index,
        destination.index
      );
      this.setState(prevState => {
        return sourceColumn === "available"
          ? {
              availableItems: {
                ...prevState.availableItems,
                [sourceBucket]: rearranged
              },
              droppableBucket: null
            }
          : {
              selectedItems: {
                ...prevState.selectedItems,
                [sourceBucket]: rearranged
              },
              droppableBucket: null
            };
      });
    } else {
      const rearranged = move(
        sourceColumnItems[sourceBucket],
        destinationColumnItems[destinationBucket],
        source.index,
        destination.index
      );
      this.setState(prevState => {
        const newUsedConfigs = new Set(prevState.usedConfigs);
        if (sourceColumn === "available") {
          newUsedConfigs.add(availableItems[sourceBucket][source.index].Config);
          return {
            availableItems: {
              ...prevState.availableItems,
              [sourceBucket]: rearranged.source
            },
            selectedItems: {
              ...prevState.selectedItems,
              [destinationBucket]: rearranged.destination
            },
            droppableBucket: null,
            usedConfigs: newUsedConfigs
          };
        } else {
          newUsedConfigs.delete(
            selectedItems[sourceBucket][source.index].Config
          );
          return {
            availableItems: {
              ...prevState.availableItems,
              [destinationBucket]: rearranged.destination
            },
            selectedItems: {
              ...prevState.selectedItems,
              [sourceBucket]: rearranged.source
            },
            droppableBucket: null,
            usedConfigs: newUsedConfigs
          };
        }
      });
    }
  };

  onDragStart = ({ source }) => {
    const { droppableId } = source;
    const bucket = droppableId.split("-")[1];
    this.setState({
      droppableBucket: bucket
    });
  };

  render = () => {
    const { className, classes, data } = this.props;
    const {
      selectedArchetype,
      availableItems,
      selectedItems,
      droppableBucket,
      usedConfigs
    } = this.state;

    const archStages = Object.keys(data[selectedArchetype]);

    return (
      <div>
        <form className={className} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="arch">
              <Typography>Archetype</Typography>
            </InputLabel>
            <Select
              value={selectedArchetype}
              onChange={this.handleChange}
              inputProps={{
                name: "archetype",
                id: "arch"
              }}
            >
              {Object.keys(data).map(arch => (
                <MenuItem key={arch} value={arch}>
                  <Typography>{arch}</Typography>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
        >
          <Grid container justify="center" spacing={32}>
            <Grid item xs={3}>
              <AvailableOptions
                availableItems={availableItems}
                droppableBucket={droppableBucket}
                stages={archStages}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectedOptions
                selectedItems={selectedItems}
                droppableBucket={droppableBucket}
                stages={archStages}
              />
            </Grid>
            <Grid item xs={3}>
              <Configurations
                usedConfigs={usedConfigs}
                selectedItems={selectedItems}
              />
            </Grid>
          </Grid>
        </DragDropContext>
      </div>
    );
  };
}

export default withStyles(styles)(SolutionTab);