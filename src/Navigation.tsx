import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ExpenseAdd, ExpenseEdit, ExpenseList, ExpenseView} from './pages';

const NavDefaultTheme = {
  dark: false,
  colors: {
    primary: '#FFFFFF',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#FFFFFF',
    border: '#FFFFFF',
    notification: '#FFFFFF',
  },
};

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  safeAreaView: {
    height: '100%',
    width: '100%',
  },
});

export const Navigation = () => {
  return (
    <View style={styles.safeAreaView}>
      <NavigationContainer theme={NavDefaultTheme}>
        <Stack.Navigator
          initialRouteName={global.ROUTES.EXPENSE_LIST}
          headerMode="none"
          screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            name={global.ROUTES.EXPENSE_ADD}
            component={ExpenseAdd}
          />
          <Stack.Screen
            name={global.ROUTES.EXPENSE_EDIT}
            component={ExpenseEdit}
          />
          <Stack.Screen
            name={global.ROUTES.EXPENSE_LIST}
            component={ExpenseList}
          />
          <Stack.Screen
            name={global.ROUTES.EXPENSE_VIEW}
            component={ExpenseView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
