import AsyncStorage from '@react-native-community/async-storage';

const clear = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    return false;
  }
};

const clearItem = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
};

const getItem = async <T>(key: string) => {
  try {
    const str = await AsyncStorage.getItem(key);
    return JSON.parse(str || '') as T;
  } catch (error) {
    return false;
  }
};

const setItem = async <T>(key: string, data: T) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    return false;
  }
};

export const LocalStorage = {
  clear,
  clearItem,
  getItem,
  setItem,
};
