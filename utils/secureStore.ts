import * as SecureStore from "expo-secure-store";

async function saveScureStore(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function getScureStore(key: string) {
  return (await SecureStore.getItemAsync(key)) ?? null;
}

async function deleteScureStore(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export { deleteScureStore, getScureStore, saveScureStore };
