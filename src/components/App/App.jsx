import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Grid from "@material-ui/core/Grid";

import { move, reorder } from "../../utils/lists";
import AvailableOptions from "../AvailableOptions";
import SelectedOptions from "../SelectedOptions/";
import Header from "../Header";
import Configurations from "../Configurations";
import methods from "../../data/libraries";

// fake data generator
const getItems = (prefix, count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `${prefix}-item-${k + offset}`,
    content: `${prefix}-item ${k + offset}`
  }));

class App extends Component {
  state = {
    availableItems: methods,
    selectedItems: {},
    // availableItems: buckets.reduce(
    //   (accu, curr) => ({ ...accu, [curr]: getItems(curr, 2) }),
    //   {}
    // ),
    // selectedItems: buckets.reduce(
    //   (accu, curr) => ({ ...accu, [curr]: [] }),
    //   {}
    // ),
    droppableBucket: null,
    usedLibraries: new Set()
  };

  componentWillMount() {
    const usedLibraries = new Set();
    const selectedItems = Object.keys(methods).reduce((accu, curr) => {
      let tempAccu = { ...accu };
      methods[curr].forEach(method => {
        if (method.required) {
          tempAccu = {
            ...tempAccu,
            [curr]: tempAccu[curr] ? [...tempAccu[curr], method] : [method]
          };
          usedLibraries.add(method.library);
        }
      });
      return tempAccu;
    }, {});
    this.setState({
      selectedItems,
      usedLibraries
    });
  }

  onDragEnd = result => {
    const { source, destination, type } = result;

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
        return sourceColumn === "available"
          ? {
              availableItems: {
                ...prevState.availableItems,
                [sourceBucket]: rearranged.source
              },
              selectedItems: {
                ...prevState.selectedItems,
                [destinationBucket]: rearranged.destination
              },
              droppableBucket: null,
              usedLibraries: new Set(
                prevState.usedLibraries.add(
                  availableItems[sourceBucket][source.index].library
                )
              )
            }
          : {
              availableItems: {
                ...prevState.availableItems,
                [destinationBucket]: rearranged.destination
              },
              selectedItems: {
                ...prevState.selectedItems,
                [sourceBucket]: rearranged.source
              },
              droppableBucket: null,
              usedLibraries: new Set(
                prevState.usedLibraries.delete(
                  selectedItems[sourceBucket][source.index].library
                )
              )
            };
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
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    const {
      availableItems,
      selectedItems,
      droppableBucket,
      usedLibraries
    } = this.state;
    return (
      <div>
        <Header />
        <DragDropContext
          onDragEnd={this.onDragEnd}
          onDragStart={this.onDragStart}
        >
          <Grid container justify="center" spacing={32}>
            <Grid item xs={3}>
              <AvailableOptions
                availableItems={availableItems}
                droppableBucket={droppableBucket}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectedOptions
                selectedItems={selectedItems}
                droppableBucket={droppableBucket}
              />
            </Grid>
            <Grid item xs={3}>
              <Configurations usedLibraries={usedLibraries} />
            </Grid>
          </Grid>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
