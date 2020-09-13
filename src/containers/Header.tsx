import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Row, Spacer } from '../atoms';
import { IcoMoon } from '../integrations/vector-icons';

export interface HeaderItem {
  name: string;
  onPress: () => void;
}

export interface HeaderProps {
  left?: HeaderItem;
  right?: HeaderItem;
  title?: string;
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  headerItem: {
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    fontSize: 22,
    textAlign: 'center',
  },
  shadow: {
    // shadow for android
    elevation: 3,
    // shadow for ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
});

export const Header = memo((props: HeaderProps) => {
  return (
    <View style={{...styles.header, ...styles.shadow}}>
      <Row>
        {props.left ? (
          <Pressable onPress={props.left.onPress}>
            <View style={styles.headerItem}>
              <IcoMoon name={props.left.name} size={16} />
            </View>
          </Pressable>
        ) : (
          <View style={styles.headerItem}>
            <Spacer space={16} isHorizontal={true} />
          </View>
        )}
        <Text style={styles.title}>{props.title}</Text>
        {props.right ? (
          <Pressable onPress={props.right.onPress}>
            <View style={styles.headerItem}>
              <IcoMoon name={props.right.name} size={16} />
            </View>
          </Pressable>
        ) : (
          <View style={styles.headerItem}>
            <Spacer space={16} isHorizontal={true} />
          </View>
        )}
        <Spacer space={16} isHorizontal={true} />
      </Row>
    </View>
  );
});
