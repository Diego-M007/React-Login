import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
    imagemfundo: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    container_login: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    input: {
      backgroundColor: 'white',
      width: '70%',
      height: 40,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      margin: 5,
    },
  });