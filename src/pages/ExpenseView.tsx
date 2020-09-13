import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
  },
});

export const ExpenseView = memo(() => {
  return (
    <View style={styles.safeAreaView}>
      {/* JUST PLACEHOLDER, SOME CONTENT WILL BE ADDED HERE */}
      <Text>ExpenseAdd Page</Text>
    </View>
  );
});
