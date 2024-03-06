import React, { useState } from 'react';
import { TextInput, View, Image, Button } from 'react-native';
import { styles } from '../styles/styles';

export default function InputPassword() {
  const ImgInputs_Password = {
    uri: 'https://imgs.search.brave.com/KsYjHrNOAadHl2YPhHWacFSAyLXoNZfXMwZA5pQhQE0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTgxLzE4MTUz/NC5wbmc',
  };

  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.view_input}>
      <Image source={ImgInputs_Password} style={styles.ImgInputs} />
      <TextInput
        placeholder="Digite sua senha"
        secureTextEntry={showPassword}
        style={styles.input}
      />
      <Button
        title={showPassword ? 'Mostrar Senha' : 'Esconder Senha'}
        onPress={togglePasswordVisibility}
      />
    </View>
  );    
}
