// persistConfig.js
import rootReducer from './reducer/rootReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // other config...
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;