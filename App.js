import { Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';
import Login from './src/pages/login';
import { styles } from './src/styles/styles';




export default function App() {
  return (
    <View style={{flex: 1}}>
      <Login/>
    </View>
  );
}

