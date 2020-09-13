import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
  },
});

export const FlexSpacer = memo(() => {
  return <View style={styles.root} />;
});
