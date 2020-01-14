import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class LandingPage extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.container}>
        <div className={classes.verticleLogo}>
          <p>Warrior Surf Foundation</p>
        </div>
        <div className={classes.cornerTitle}>
          <p>
            Impact <br /> Report
          </p>
        </div>
        <div className={classes.missionStatement}>
          <p>
            Adaptive <br /> Surf <br /> Therapy
          </p>
          <p>
            Warrior Surf is commited to promoting physical and metal wellness
            for veterans and their families through adaptive surf therapy
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);