import React, { memo } from 'react';
import { StyleSheet, TextInputProps, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export interface InputProps extends TextInputProps {
  // inputType
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingHorizontal: 16,
  },
  inputArea: {
    height: 32,
    width: '100%',
    borderRadius: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    height: '100%',
    width: '100%',
    paddingHorizontal: 16,
  },
});

export const Input = memo((props: InputProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.inputArea}>
        <TextInput {...props} style={styles.text} />
      </View>
    </View>
  );
});
