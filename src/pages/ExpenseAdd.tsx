import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { memo, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { generateShortId } from 'short-id-generator';

import { Button, FlexSpacer, Input, Spacer } from '../atoms';
import { Header } from '../containers';
import { useExpense } from '../contexts';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
});

export const ExpenseAdd = memo(() => {
  const navigation = useNavigation();
  const expense = useExpense();
  const [value, setValue] = useState<number | undefined>(undefined);

  const onChangeText = (text?: string) => {
    if (text === undefined) {
      setValue(undefined);
      return;
    }
    const amount = parseInt(text, 10);
    if (amount === NaN) {
      Alert.alert('Please enter a number');
      return;
    }
    setValue(amount);
  };

  const save = () => {
    if (typeof value !== 'number') {
      return;
    }
    expense.append({
      amount: value,
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
        onChangeText={onChangeText}
        placeholder="Enter Amount"
      />
      <FlexSpacer />
      <Button label="Save" onPress={save} />
    </View>
  );
});
