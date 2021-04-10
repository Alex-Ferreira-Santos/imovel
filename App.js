import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Casa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  }
});

export default App;
