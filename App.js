import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TocuhableCircle from './components/TouchableCircle'
import { AsyncStorage } from 'react-native'


export default class App extends React.Component {
  state = {
    firstCount: 0,
    secondCount: 0,
    lastColor: '',
  }

  componentDidMount() {
    AsyncStorage.getItem('state').then((value) => {
      console.log('Retrieved from AsyncStorage ', value)
      this.setState(JSON.parse(value));
    }).done();

  }

  decreaseSecond = () => {
    let { firstCount, secondCount } = this.state
    let newFirstCount = firstCount + 1
    let newSecondCount = secondCount - 1
    let newState = { firstCount: newFirstCount, secondCount: newSecondCount, lastColor: 'Green' }
    AsyncStorage.setItem('state', JSON.stringify(newState));
    this.setState(newState)
  }

  decreaseFirst = () => {
    let { firstCount, secondCount } = this.state
    let newFirstCount = firstCount - 1
    let newSecondCount = secondCount + 1
    let newState = { firstCount: newFirstCount, secondCount: newSecondCount, lastColor: 'Blue' }
    AsyncStorage.setItem('state', JSON.stringify(newState));
    this.setState(newState)
  }


  render() {

    return (
      <View style={styles.container}>
          <TocuhableCircle decreaseOther={this.decreaseSecond} count={this.state.firstCount} style={styles.firstCircle} />
          <Text>{this.state.lastColor}</Text>
          <TocuhableCircle decreaseOther={this.decreaseFirst} count={this.state.secondCount} style={styles.secondCircle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a4a4a5',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop:50,
    paddingBottom:50,
    paddingLeft:20,
    paddingRight:20, 
  },
  firstCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'green',
  },
  secondCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue'
  }
});
