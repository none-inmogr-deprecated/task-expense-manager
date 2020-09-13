import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { Fragment, memo, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { FlexSpacer, Row } from '../atoms';
import { Header } from '../containers';
import { useExpense } from '../contexts';

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

export interface ExpenseViewProps {
  route: {
    params: {
      id?: string;
    };
  };
}

export const ExpenseView = memo((props: ExpenseViewProps) => {
  const navigation = useNavigation();
  const expense = useExpense();
  const [item, setItem] = useState<Expense | undefined>();

  const id = props.route.params?.id;

  useEffect(() => {
    const itemIndex = expense.data.findIndex((i) => i.id === id);
    if (itemIndex !== -1) {
      setItem(expense.data[itemIndex]);
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
        title="View Expense"
        right={{
          name: 'pencil',
          onPress: () => {
            navigation.navigate(global.ROUTES.EXPENSE_EDIT, {id: id});
          },
        }}
      />
      {item ? (
        <Fragment>
          <View style={styles.viewItem}>
            <Row>
              <Text style={styles.text}>ID</Text>
              <FlexSpacer />
              <Text style={styles.text}>{item.id}</Text>
            </Row>
          </View>
          <View style={styles.viewItem}>
            <Row>
              <Text style={styles.text}>DATE</Text>
              <FlexSpacer />
              <Text style={styles.text}>
                {moment(item.date).format('MM/DD')}
              </Text>
            </Row>
          </View>
          <View style={styles.viewItem}>
            <Row>
              <Text style={styles.text}>AMOUNT</Text>
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
        </Fragment>
      ) : null}
    </View>
  );
});
