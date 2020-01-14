const styles = theme => ({
  container: {
    height: "100vh",
    backgroundColor: "grey",
    display: "flex"
  },
  verticleLogo: {
    // height: "100vh",
    backgroundColor: "black",
    width: 150,
    color: "white",
    textTransform: "uppercase",
    // transform: "rotate(-90deg)"
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    border: "blue solid 1px"
  },
  cornerTitle: {
    backgroundColor: "black",
    color: "white",
    textTransform: "uppercase",
    border: "red solid 1px",
    height: 100,
    width: 250,
    display: "flex",
    flexDirection: "column"

    // justifyContent: "center",
    // alignItems: "center"
  },
  missionStatement: {
    color: "white",
    border: "blue solid 1px",
    height: 200,
    width: 200
  }
});

export default styles;
