import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';

const { height, width } = Dimensions.get("window");

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor={"transparent"} 
          translucent={true}/>

          <Text style={styles.title}>JUST DO IT</Text>
          <View style={styles.card}>
            <TextInput style={styles.input} placeholder={"New To do"}/>
          </View>

        
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "600",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width-50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 0.5,
        shadowRadious: 5,
        shadowOffset:{
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
    
  }
}); 

