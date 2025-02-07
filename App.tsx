import type React from 'react';
import {
  Button,
  SafeAreaView,
  Text,
} from 'react-native';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <Button title="Click me" onPress={() => console.log('Button pressed')} />
    </SafeAreaView>
  );
}

export default App;
