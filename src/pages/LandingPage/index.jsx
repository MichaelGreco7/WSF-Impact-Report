import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

class LandingPage extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <Card className={classes.card1}>
          <p className={classes.name}>Warrior Surf Foundation</p>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
