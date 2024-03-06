import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../styles/styles';

const About = () => {
    const Imagem = {
        uri: "https://imgshttps://e7.pngegg.cohttps://recursos.sacramento.com.br/i/logo_sacramento-300x300px.png/pngimages/108/703/png-clipart-blue-circular-frame-border-blue-round-thumbnail.png.search.brave.com/NNd9gqPShttps://www.horadecodar.com.br//wp-content/uploads/2019/07/imagem_redonda_com_css_exemplo.png.pngrJjKMn4FFOAz-fUhttps:/htps://ww.horadecodar.com.br//wp-content/uploads/2019/07/imagem_redonda_com_css_exemplo.png.pngstatic.vecteezy.com/ti/vetor-gratis/p3/13259900-alienigena-bonitinho-com-ilustracao-de-icones-do-dos-desenhos-animados-da-terra-conceito-de-desenho-animado-plano-adequado-para-qualquer-projeto-criativo-vetor.jpgsD-4YF0Ng9dVOPwWDu40/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8xMC8wNC80Ny91/c2VyLTI5MzUzNzNf/XzM0MC5wbmc",
      };
  return (
    <View style={styles/styles.container}>
      <Image
      source={Imagem}
        style={styles/styles.imagem}
      />
      <Text style={styles/styles.text}>
        Aqui esta uma imagem arredondada 300 x 300.
      </Text>
    </View>
  );
};


export default About;
