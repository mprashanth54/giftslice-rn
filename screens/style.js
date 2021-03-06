const React = require("react-native");

const { StyleSheet } = React;

export default {
  containerView: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
    fontWeight: "bold",
  },
  loginScreenContainer: {
    backgroundColor: "#e1e8ee",
    flex: 1,
  },
  logo: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  logoText: {
    fontSize: 50,
    fontWeight: "500",
    marginTop: 150,
    marginBottom: 30,
    textAlign: "center",
  },
  loginFormTextInput: {
    height: 45,
    fontSize: 14,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 1,
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginBottom: 10,
  },
  fbLoginButton: {
    fontSize: 20,
    height: 45,
    marginTop: 10,
    backgroundColor: "transparent",
    color: "#3897f1",
    marginBottom: 10,
  },
  footer: {
    position: "absolute",
    alignItems: "center",
    height: 70,
    left: 10,
    bottom: 0,
  },
  tinyLogoImage: {
    width: 70,
    height: 70,
  },
  bottomView: {
    width: "100%",
    height: 50,
    backgroundColor: "#EE5407",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //Here is the trick
    bottom: 0, //Here is the trick
  },
};
