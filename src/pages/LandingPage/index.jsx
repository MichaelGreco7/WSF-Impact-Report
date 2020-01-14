import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class LandingPage extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <div className={classes.verticleLogo}>Warrior Surf Foundation</div>
        <div className={classes.cornerTitle}></div>
        <div className={classes.missionStatement}></div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
