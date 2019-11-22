import AsyncStorage from '@react-native-community/async-storage';

export const addFav = async favId => {
  try {
    await AsyncStorage.setItem(
      `${favId}`,
      JSON.stringify({id: favId, favedOn: new Date()}),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getAllFavs = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const values = await AsyncStorage.multiGet(keys);
    return values.filter(value => value[1].includes('faved_on'));
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeFav = async favId => {
  try {
    const fav = await AsyncStorage.removeItem(`${favId}`);
    return fav;
  } catch (e) {
    console.log(e);
    return false;
  }
};
