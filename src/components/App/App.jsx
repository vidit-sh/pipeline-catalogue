import React, { Component } from "react";

import Header from "../Header";
import {
  Tabs,
  Tab,
  withStyles,
  LinearProgress,
  MuiThemeProvider
} from "@material-ui/core";
import SolutionTab from "../SolutionTab/SolutionTab";
import styles from "./App.styles";
import theme from "../../theme";

class App extends Component {
  state = {
    currentSol: 0,
    data: null
  };

  async componentWillMount() {
    const response = await fetch("./static/data/libraries.json");

    const configResponse = await fetch(
      "./static/templates/config.template.mst"
    );
    this.configTemplate = await configResponse.text();

    const pipelineResponse = await fetch(
      "./static/templates/pipeline.template.mst"
    );
    this.pipelineTemplate = await pipelineResponse.text();

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

    return (
      <MuiThemeProvider theme={theme}>
        {data ? (
          <div>
            <Header />
            <div className={classes.tabs}>
              <Tabs
                value={currentSol}
                onChange={this.onTabClick}
                indicatorColor="primary"
              >
                {Object.keys(data).map(sol => (
                  <Tab key={sol} label={sol} />
                ))}
              </Tabs>
              {Object.keys(data).map(
                (sol, index) =>
                  currentSol === index ? (
                    <SolutionTab
                      key={sol}
                      data={data[sol]}
                      configTemplate={this.configTemplate}
                      pipelineTemplate={this.pipelineTemplate}
                    />
                  ) : null
              )}
            </div>
          </div>
        ) : (
          <LinearProgress color="primary" />
        )}
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
