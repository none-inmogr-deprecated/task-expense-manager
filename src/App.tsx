import './constants';

import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { createExpense, ExpenseContext } from './contexts';
import { LocalStorage, StorageKeys } from './integrations';
import { Navigation } from './Navigation';

const styles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
  },
});

const App = () => {
  const expense = createExpense();

  const fetchExpense = async () => {
    const items =
      (await LocalStorage.getItem<Expense[]>(StorageKeys.EXPENSE_LIST)) || [];
    expense.set(items);
  };

  useEffect(() => {
    fetchExpense();
  }, []);

  return (
    <ExpenseContext.Provider value={expense}>
      <SafeAreaView style={styles.safeAreaView}>
        <Navigation />
      </SafeAreaView>
    </ExpenseContext.Provider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
