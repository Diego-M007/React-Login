import React from "react";
import { TextInput, View, Image } from "react-native";
import { styles } from "../styles/styles";

export default function InputEmail() {

    const ImgInputs_Email = {
        uri: "https://imgs.search.brave.com/r-hZyDlrdmnIieMckQOtUCPogkiFNzAGeh6dSqKqqbc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zMDMzLzMwMzMx/NDMucG5n"
      };

  return (
    <View style={styles.view_input}>
      <Image source={ImgInputs_Email} style={styles.ImgInputs} />
      <TextInput
        placeholder="Digite seu email" 
        secureTextEntry={false}
        style={styles.input}
      />
    </View>
  );
}
