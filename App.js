import * as React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import { Text, View, StyleSheet, ImageBackground,} from 'react-native';
import {Header} from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <ImageBackground
        style={styles.container}
        source={require('./assets/background.jpg')}>
        <Header/>
        </ImageBackground>
        </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});
