import React, { Component } from "react";

import Header from "../Header";
import { Tabs, Tab, withStyles, LinearProgress } from "@material-ui/core";
import SolutionTab from "../SolutionTab/SolutionTab";
import styles from "./App.styles";

class App extends Component {
  state = {
    currentSol: 0,
    data: null
  };

  async componentWillMount() {
    const response = await fetch("./static/data/libraries.json");
    this.setState({
      data: await response.json()
    });
  }

  onTabClick = (event, value) => {
    this.setState({ currentSol: value });
  };

  render() {
    const { classes } = this.props;
    const { currentSol, data } = this.state;

    return data ? (
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
    ) : (
      <LinearProgress color="secondary" />
    );
  }
}

export default withStyles(styles)(App);
