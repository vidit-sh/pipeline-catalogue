import React from "react";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classnames from "classnames";
import saveAs from "file-saver";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

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
    expanded: null,
    selectedItems: this.props.selectedItems
  };

  pipelineRef = null;
  configRef = null;

  componentWillReceiveProps(nextProps) {
    const { selectedItems } = this.props;
    if (nextProps.selectedItems && selectedItems !== nextProps.selectedItems) {
      const items = nextProps.selectedItems.Default || [];
      const segregatedItems = items.reduce(
        (accu, item) => ({
          ...accu,
          [item.Stage]: accu[item.Stage] ? [...accu[item.Stage], item] : [item]
        }),
        {}
      );
      this.setState({ selectedItems: segregatedItems });
    }
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  download = (content, filename = "file") => {
    if (!content) return;
    var blob = new Blob([content]);
    saveAs(blob, filename);
  };

  render() {
    const {
      className,
      classes,
      usedConfigs,
      pipelineTemplate,
      configTemplate
    } = this.props;
    const { expanded, selectedItems } = this.state;
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
            <Typography className={classes.heading} variant="h3">
              Pipeline
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <pre
              className={classes.code}
              ref={element => (this.pipelineRef = element)}
            >
              {pipelineTemplate
                ? Mustache.render(pipelineTemplate, {
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
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.btnSave}
              onClick={() => {
                this.download(this.pipelineRef.innerText, "pipeline");
              }}
            >
              <SaveIcon className={classes.btnIcon} />
              Save
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "config"}
          onChange={this.handleChange("config")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading} variant="h3">
              Config
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <pre
              className={classes.code}
              ref={element => (this.configRef = element)}
            >
              {configTemplate
                ? Mustache.render(configTemplate, {
                    usedConfigs: Array.from(usedConfigs)
                    // showLibraries: usedConfigs.size
                  })
                : null}
            </pre>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.btnSave}
              onClick={() => {
                this.download(this.configRef.innerText, "config");
              }}
            >
              <SaveIcon className={classes.btnIcon} />
              Save
            </Button>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Configurations);
