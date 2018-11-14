import React, { Component } from "react";

import Header from "../Header";
import { Tabs, Tab, withStyles } from "@material-ui/core";
import data from "../../data/libraries.json";
import SolutionTab from "../SolutionTab/SolutionTab";
import styles from "./App.styles";

class App extends Component {
  state = {
    currentSol: 0
  };

  onTabClick = (event, value) => {
    this.setState({ currentSol: value });
  };

  render() {
    const { classes } = this.props;
    const { currentSol } = this.state;

    return (
      <div>
        <Header />
        <div className={classes.tabs}>
          <Tabs value={currentSol} onChange={this.onTabClick}>
            {Object.keys(data).map(sol => (
              <Tab key={sol} label={sol} />
            ))}
          </Tabs>
          {Object.keys(data).map(
            (sol, index) =>
              currentSol === index ? (
                <SolutionTab key={sol} data={data[sol]} />
              ) : null
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
