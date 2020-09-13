import {useNavigation} from '@react-navigation/native';
import {cloneDeep} from 'lodash';
import React, {Fragment, memo, useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';

import {Button, FlexSpacer, Input, Spacer} from '../atoms';
import {Header} from '../containers';
import {useExpense} from '../contexts';

const styles = StyleSheet.create({
  root: {
    height: '100%',
    width: '100%',
  },
  viewItem: {
    padding: 16,
  },
  text: {
    fontSize: 20,
  },
});

export interface ExpenseEditProps {
  route: {
    params: {
      id?: string;
    };
  };
}

export const ExpenseEdit = memo((props: ExpenseEditProps) => {
  const navigation = useNavigation();
  const expense = useExpense();
  const [item, setItem] = useState<Expense | undefined>();
  const [value, setValue] = useState<string | undefined>(undefined);

  const id = props.route.params?.id;
  const itemIndex = expense.data.findIndex((i) => i.id === id);

  const reset = () => {
    setValue(`${item?.amount || ''}`);
  };

  const save = () => {
    const amount = Number(value);
    if (isNaN(amount)) {
      Alert.alert('Please enter a valid amount');
      return;
    }
    if (itemIndex !== -1) {
      const next = cloneDeep(expense.data);
      next[itemIndex].amount = amount;
      expense.set(next);
    }
    navigation.navigate(global.ROUTES.EXPENSE_LIST);
  };

  useEffect(() => {
    if (itemIndex !== -1) {
      setItem(expense.data[itemIndex]);
      setValue(`${expense.data[itemIndex].amount}`);
    }
  }, []);

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
        title="Edit Expense"
      />
      {item ? (
        <Fragment>
          <Spacer space={32} />
          <Input
            value={`${value || ''}`}
            onChangeText={setValue}
            placeholder="Enter Amount"
          />
          <FlexSpacer />
          <Button label="Reset" onPress={reset} />
          <Spacer space={16} />
          <Button label="Save" onPress={save} />
        </Fragment>
      ) : null}
    </View>
  );
});
