// Login.js

import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginText from "../components/LoginText";
import LoginButton from "../components/LoginButton";
import LoginInput from "../components/LoginInput";
import LoginImage from "../components/LoginImage";
import LoginImageBackground from "../components/LoginImageBackground";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import { styles } from "../styles/styles";

export default function Login() {
  const logo = {
    uri: "https://imgs.search.brave.com/NNd9gqPSrJjKMn4FFOAz-fUsD-4YF0Ng9dVOPwWDu40/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8xMC8wNC80Ny91/c2VyLTI5MzUzNzNf/XzM0MC5wbmc",
  };
  const ImgInputs_Email = {
    uri: "https://imgs.search.brave.com/r-hZyDlrdmnIieMckQOtUCPogkiFNzAGeh6dSqKqqbc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zMDMzLzMwMzMx/NDMucG5n"
  };
  const ImgInputs_Password = {
    uri: "https://imgs.search.brave.com/516f_z_ji9uojpyC30VOmTW4Ts4IZ4abl236wZyNWgI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xMTE5MC8xMTE5/MDA3OS5wbmc"
  }


  return (
    <View style={{flex: 1}}>
      {/* Fundo da tela com imagem de background */}
      <LoginImageBackground >
        {/* Contêiner para o conteúdo do login */}
        <View style={styles.container_login}>
          {/* Texto de boas-vindas */}
          <LoginText />
          {/* Imagem do logo */}
          <LoginImage source={logo} />
          {/* Inputs para o email e senha */}
          <InputEmail />
          < InputPassword/>
          {/* Botão de login */}
          <LoginButton />
          {/* Barra de status */}
          <StatusBar style="auto" />
        </View>
      </LoginImageBackground>
    </View>
  );
}
