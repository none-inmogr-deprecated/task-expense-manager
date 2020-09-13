import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

export interface SpacerProps {
  space: number;
  isHorizontal?: boolean;
}

const useStyles = StyleSheet.create(({space}: SpacerProps) => ({
  horizontal: {
    width: space,
  },
  vertical: {
    height: space,
  },
}));

export const Spacer = memo((props: SpacerProps) => {
  const styles = useStyles(props);
  return (
    <View style={props.isHorizontal ? styles.horizontal : styles.vertical} />
  );
});
