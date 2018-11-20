import React from "react";
import Typography from "@material-ui/core/Typography";
import classnames from "classnames";

import Bucket from "../Bucket";
import { withStyles } from "@material-ui/core";
import styles from "./OptionsSelector.styles";

function OptionsSelector({
  className,
  classes,
  items,
  title,
  type,
  droppableBucket,
  stages
}) {
  return (
    <div className={classnames(className, classes.root)}>
      <Typography variant="h2" className={classes.heading}>
        {title}
      </Typography>
      {stages.map(bucket => {
        return (
          <Bucket
            key={bucket}
            bucketName={bucket}
            items={items}
            type={type}
            droppableBucket={droppableBucket}
          />
        );
      })}
    </div>
  );
}

export default withStyles(styles)(OptionsSelector);
