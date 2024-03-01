import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginText from "../components/LoginText";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/LoginInput";
import LoginImage from "../components/LoginImage";
import LoginImageBackground from "../components/LoginImageBackground";
import { styles } from "../styles/styles";

export default function Login() {
  const logo = {
    uri: "https://imgs.search.brave.com/NNd9gqPSrJjKMn4FFOAz-fUsD-4YF0Ng9dVOPwWDu40/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8xMC8wNC80Ny91/c2VyLTI5MzUzNzNf/XzM0MC5wbmc",
  };
  const imgB = {
    uri: "https://imgs.search.brave.com/tuMrplV_qcBNlI9SGv52jWf1yqdUoveXzLnxtrHjeGg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/YnN0cmFjdC1kaWdp/dGFsLWdyaWQtYmxh/Y2stYmFja2dyb3Vu/ZF81Mzg3Ni05NzY0/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
  };

  return (
    <View style={{flex: 1}}>
      <LoginImageBackground source={imgB}>
        <View style={styles.container}>
          <View style={styles.container_login}>
            <LoginText />
            <LoginImage source={logo} />
            <LoginInput placeholder="Digite seu email" secureTextEntry={false} />
            <LoginInput placeholder="Digite sua senha" secureTextEntry={true} />
            <LoginButton />
            <StatusBar style="auto" />
          </View>
        </View>
      </LoginImageBackground>
    </View>
  );
}
