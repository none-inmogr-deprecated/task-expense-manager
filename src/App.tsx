import './constants';

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Navigation } from './Navigation';

const styles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Navigation />
    </SafeAreaView>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
