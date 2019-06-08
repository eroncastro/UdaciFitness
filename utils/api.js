import { AsyncStorage } from 'react-native';
import { CALENDAR_STORAGE_KEY } from './calendar';

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    CALENDAR_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeEntry({ key }) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then(results => {
      const data = JSON.stringify(results).reduce((prev, cur) => {
        return cur.key === key ? prev : { ...prev, cur };
      });

      AsyncStorage.setItem(key, JSON.stringify(data));
    })
}
