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
      alert(results);
      const keys = Object.keys(results);
      alert(keys);
      const data = keys.reduce((prev, cur) => {
        return cur.key === key ? prev : { ...prev, cur };
      }, {});
      alert(data);

      AsyncStorage.setItem(key, JSON.stringify(data));
    })
}
