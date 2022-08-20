
import { MMKV } from "react-native-mmkv";
export const storage = new MMKV();

const KEY = "redux";
export function loadState() {
  try {
    const serializedState = storage.getString(KEY);
    // const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    storage.set(KEY, serializedState);
    // localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}
