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
    uri: "https://imgs.search.brave.com/qomZtz1g8oyQCGku2s8Xc_d44MSlnwQNXWtRjj3iHa0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzExMS83NDUv/MTkzL3JlYWN0anMt/amF2YXNjcmlwdC1w/cm9ncmFtbWluZy1w/cm9ncmFtbWluZy1s/YW5ndWFnZS1oZC13/YWxscGFwZXItcHJl/dmlldy5qcGc",
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
