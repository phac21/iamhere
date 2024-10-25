import { StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { Home } from "./screens/Home"

export default function App() {

  return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="#000000"
            translucent
          />
          <Home />
        </SafeAreaView>
      </ SafeAreaProvider>
  )
}