import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { memo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { FlexSpacer, Row, Spacer } from '../atoms';
import { Header } from '../containers';
import { useExpense } from '../contexts';
import { IcoMoon } from '../integrations/vector-icons';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
  viewItem: {
    padding: 16,
  },
  textView: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
});

export const ExpenseList = memo(() => {
  const navigation = useNavigation();
  const expense = useExpense();

  const onPressItem = () => {
    navigation.navigate(global.ROUTES.EXPENSE_VIEW);
  };

  return (
    <View style={styles.root}>
      <Header
        title="Expenses"
        right={{
          name: 'folder-plus',
          onPress: () => {
            navigation.navigate(global.ROUTES.EXPENSE_ADD);
          },
        }}
      />
      {expense.data.map((item, index) => {
        return (
          <Pressable key={index} onPress={onPressItem}>
            <View style={styles.viewItem}>
              <Row>
                <IcoMoon name="coin-dollar" size={24} />
                <Spacer space={16} isHorizontal={true} />
                <View style={styles.textView}>
                  <Text style={styles.text}>
                    {moment(item.date).format('MM/DD')}
                  </Text>
                </View>
                <FlexSpacer />
                <Text style={styles.text}>
                  {new Intl.NumberFormat('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    currency: 'USD',
                    style: 'currency',
                  }).format(item.amount)}
                </Text>
              </Row>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
});
