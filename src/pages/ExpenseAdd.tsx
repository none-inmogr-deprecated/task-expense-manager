import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import React, {memo, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {generateShortId} from 'short-id-generator';

import {Button, FlexSpacer, Input, Spacer} from '../atoms';
import {Header} from '../containers';
import {useExpense} from '../contexts';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
});

export const ExpenseAdd = memo(() => {
  const navigation = useNavigation();
  const expense = useExpense();
  const [value, setValue] = useState<string | undefined>(undefined);

  const save = () => {
    const amount = Number(value);
    if (isNaN(amount)) {
      Alert.alert('Please enter a valid amount');
      return;
    }
    expense.append({
      amount: amount,
      date: moment().toISOString(),
      id: generateShortId(),
    });
    navigation.navigate(global.ROUTES.EXPENSE_LIST);
  };

  return (
    <View style={styles.root}>
      <Header
        left={{
          name: 'arrow-left',
          onPress: () => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            }
          },
        }}
        title="Create New Expense"
      />
      <Spacer space={32} />
      <Input
        value={`${value || ''}`}
        onChangeText={setValue}
        placeholder="Enter Amount"
      />
      <FlexSpacer />
      <Button label="Save" onPress={save} />
    </View>
  );
});
