const styles = theme => ({
  container: {
    height: "100vh",
    backgroundColor: "grey",
    fontFamily: "Bebas Neue"
  },
  card1: {
    background: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: 300,
    marginLeft: "10%"
  },
  name: {
    fontSize: 100,
    textAlign: "center",
    transform: "rotate(-90deg)",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
