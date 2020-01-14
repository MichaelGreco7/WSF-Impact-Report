const styles = theme => ({
  container: {
    height: "100vh",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-between"
  },
  verticleLogo: {
    backgroundColor: "black",
    color: "white",
    textTransform: "uppercase",
    border: "blue solid 1px",
    marginLeft: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  cornerTitle: {
    backgroundColor: "black",
    color: "white",
    textTransform: "uppercase",
    border: "red solid 1px",
    height: 100,
    width: 250,
    display: "flex",
    justifyContent: "space-around"

    // justifyContent: "center",
    // alignItems: "center"
  },
  missionStatement: {
    color: "white",
    border: "green solid 1px",
    height: 200,
    width: 250
  },
  titleStatementContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});

export default styles;
