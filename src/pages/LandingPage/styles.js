const styles = theme => ({
  container: {
    height: "100vh",
    fontFamily: "Bebas Neue",
    display: "flex",
    justifyContent: "space-between",
    backgroundImage: "url(images/background.jpg)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
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
    fontSize: "6rem",
    textAlign: "center",
    transform: "rotate(-90deg)",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },

  card23Container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 500
  },

  card2: {
    background: "black",
    color: "white",
    height: 150,
    marginTop: "20%",
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "center",
    alignItems: "center"
  },

  card2Para: {
    fontSize: "3rem",
    marginRight: "3%"
  },

  card3: {
    background: "black",
    //opacity: 0,
    color: "white",
    marginBottom: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },

  card3H1: {
    fontSize: "4rem",
    color: "white",
    marginBottom: -10
  },
  card3Para: {
    fontSize: 30,
    color: "white"
  }
});

export default styles;
