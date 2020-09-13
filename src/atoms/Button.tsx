import React, {memo} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export interface ButtonProps {
  onPress: () => void;
  label: string;
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingHorizontal: 16,
  },
  clickableArea: {
    backgroundColor: 'black',
    height: 32,
    width: '100%',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
  },
});

export const Button = memo((props: ButtonProps) => {
  return (
    <View style={styles.root}>
      <Pressable onPress={props.onPress}>
        <View style={styles.clickableArea}>
          <Text style={styles.text}>{props.label}</Text>
        </View>
      </Pressable>
    </View>
  );
});
