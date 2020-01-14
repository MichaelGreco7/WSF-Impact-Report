const styles = theme => ({
  container: {
    height: "100vh",
    backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Bebas Neue"
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

  logo: {
    transform: "rotate(-90deg)",
    fontSize: 30
  },

  cornerTitle: {
    backgroundColor: "black",
    color: "white",
    textTransform: "uppercase",
    border: "red solid 1px",
    height: 100,
    width: 400,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontSize: 35

    // justifyContent: "center",
    // alignItems: "center"
  },

  img: {
    width: 80,
    height: 80
  },

  missionStatement: {
    color: "white",
    border: "green solid 1px",
    height: 500,
    width: 400
  },
  titleStatementContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  msTitle: {
    fontSize: 55,
    lineHeight: 1,
    letterSpacing: 5,
    marginBottom: -10
  },

  msPara: {
    fontSize: 40
  }
});

export default styles;
