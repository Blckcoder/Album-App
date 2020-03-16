//import a library to creat components//
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

//importing component to root component//
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {
  render() {
    return (

      //component nesting process//
      <View style={styles.container}>
        <Header headerText={'ALBUMS '} />
        <AlbumList/>
      </View>

    );
  }
}
//export so that other components can also use this component//
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});
