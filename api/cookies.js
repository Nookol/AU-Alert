import * as SecureStore from 'expo-secure-store';

export const setCookie = async (key, value) => {
    await SecureStore.setItemAsync(key, value);
    console.log('Cookie set successfully!');
}

export const getCookie = async (key) => {
    const value = await SecureStore.getItemAsync(key);
    console.log(value)
    if (value) {
        console.log('Cookie value:', value);
        return value;
    } else {
        console.log('Cookie not found');
        return null;
    }
}


