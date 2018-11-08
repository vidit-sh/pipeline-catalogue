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

const getConfig = usedLibraries => {
  return `config:${
    usedLibraries && usedLibraries.size
      ? `
    libraries:
${Array.from(usedLibraries.values())
          .map(lib => `\t- ${lib}`)
          .join("\n")}
`
      : ""
  }`;
};

const getPipeline = () => `
@Library('conduit')_

pipeline {
  agent any
  options {
    {{#options}}
    {{.}}
    {{/options}}
  }
  stages {
    {{#stages}}
    {{#if methods}}
    stage('{{ name }}') {
      steps {
        {{#unless noUnstash}}
        unstash 'src'
        {{/unless}}
        {{#methods}}
        {{#with (lookup ../../methods .) as |method|}}
        {{#unless isCore}}{{method.src}}.{{/unless}}{{method.name}} {{method.defaultArgs}}
        {{/with}}
        {{/methods}}
      }
    }
    {{/if}}
    {{/stages}}
  }
  {{#if post}}
  post {
    always {
      script {
      {{#post}}
          {{.}}
      {{/post}}
      }
    }
  }
  {{/if}}
}
`;

class Configurations extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { className, classes, usedLibraries } = this.props;
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
            <pre>{getPipeline()}</pre>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          expanded={expanded === "config"}
          onChange={this.handleChange("config")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              config/Jenkinsfile.yaml
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <pre>{getConfig(usedLibraries)}</pre>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Configurations);
