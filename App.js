import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TocuhableCircle from './components/TouchableCircle'

export default class App extends React.Component {
  state = {
    decreaseFirst: 0,
    decreaseSecond:0
  }

  decreaseFirst = () => {
    this.setState({decreaseFirst: 1})
  }

  decreaseSecond = () => {
    this.setState({decreaseSecond: 1})
  }


  render() {

    const firstCircleColor = 'blue';
    const secondCircleColor = 'green';

   
    return (
      <View style={styles.container}>
        <TocuhableCircle decreaseValue={this.state.decreaseFirst} decreaseOther={this.decreaseSecond} count={this.state.countOne} onPress={this.sumOne} style={styles.firstCircle} />
        <TocuhableCircle decreaseValue={this.state.decreaseSecond} decreaseOther={this.decreaseFirst} count={this.state.countTwo} onPress={this.sumTwo} style={styles.secondCircle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#a4a4a5',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
    borderRadius: 100 / 2,
    backgroundColor: 'blue'
  }
});
