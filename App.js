import { Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import ComponentLogin from './src/components/ComponentLogin';
import { styles } from './src/styles/styles';



export default function App() {

  const imgB = { uri: 'https://imgs.search.brave.com/qomZtz1g8oyQCGku2s8Xc_d44MSlnwQNXWtRjj3iHa0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzExMS83NDUv/MTkzL3JlYWN0anMt/amF2YXNjcmlwdC1w/cm9ncmFtbWluZy1w/cm9ncmFtbWluZy1s/YW5ndWFnZS1oZC13/YWxscGFwZXItcHJl/dmlldy5qcGc' };

  return (
    <View style={styles.container}>


      <ImageBackground
        source={imgB}
        style={styles.imagemfundo}
      >
        <ComponentLogin/>
      </ImageBackground>
    </View>
  );
}

