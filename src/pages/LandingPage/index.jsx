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
        <div className={classes.card23Container}>
          <Card className={classes.card2}>
            <p className={classes.card2Para}>
              Impact <br /> Report
            </p>
          </Card>
          <Card className={classes.card3}>
            <h1 className={classes.card3H1}>
              Adaptive <br />
              Surf
              <br /> Therapy
            </h1>
            <p className={classes.card3Para}>
              Warrior Surf Is commited to promoting physical and mental wellness
              for veterans and thier families through adaptive surf therapy
            </p>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LandingPage);
