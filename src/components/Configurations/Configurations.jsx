import React from "react";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classnames from "classnames";

import {
  withStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "@material-ui/core";
import styles from "./Configurations.styles";

const Mustache = require("mustache");

class Configurations extends React.Component {
  state = {
    expanded: null
  };

  async componentDidMount() {
    const configResponse = await fetch(
      "./static/templates/config.template.mst"
    );
    this.configTemplate = await configResponse.text();
    const pipelineResponse = await fetch(
      "./static/templates/pipeline.template.mst"
    );
    this.pipelineTemplate = await pipelineResponse.text();
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { className, classes, usedConfigs, selectedItems } = this.props;
    const { expanded } = this.state;
    return (
      <div className={classnames(className, classes.root)}>
        <Typography variant="h2" className={classes.heading}>
          Configurations
        </Typography>
        <ExpansionPanel
          expanded={expanded === "pipeline"}
          onChange={this.handleChange("pipeline")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Pipeline</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <pre>
              {this.pipelineTemplate
                ? Mustache.render(this.pipelineTemplate, {
                    selectedItems: Object.keys(selectedItems).map(key => ({
                      name: key,
                      commands: selectedItems[key].reduce(
                        (accu, item) =>
                          Array.isArray(item.Command)
                            ? accu.concat(item.Command)
                            : [...accu, item.Command],
                        []
                      ),
                      libraries: selectedItems[key].map(item => item.Library),
                      isStageVisible:
                        !!selectedItems[key] && selectedItems[key].length
                    }))
                  })
                : null}
            </pre>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "config"}
          onChange={this.handleChange("config")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Config</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <pre>
              {this.configTemplate
                ? Mustache.render(this.configTemplate, {
                    usedConfigs: Array.from(usedConfigs)
                    // showLibraries: usedConfigs.size
                  })
                : null}
            </pre>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Configurations);
