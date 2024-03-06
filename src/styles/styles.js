import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 20,
    color: 'white',
  },
  logo: {
    width: 130,
    height: 130,
    marginBottom: 30,
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
    flex:1,
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
  view_input: {
    flexDirection: "row",
  },
  ImgInputs: {
    height: 40,
    width: 40,
  }
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150, // Torna a imagem redonda
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
    backgroundColor: 'white',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center'
});
