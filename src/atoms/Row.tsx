import React, { memo, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

export interface RowProps {
  children?: ReactNode;
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export const Row = memo((props: RowProps) => {
  return <View style={styles.root}>{props.children}</View>;
});
