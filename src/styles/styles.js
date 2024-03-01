import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 100,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    paddingLeft: 5,
    fontSize: 15
  },
});
