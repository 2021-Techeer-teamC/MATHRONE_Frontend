import { createContext, useContext } from 'react';
import UserStore from './user/userStore';

const userStore = new UserStore();

export const store = {
  userStore,
};

export const StoreContext = createContext(store);
export const useStore = () => {
  return useContext(StoreContext);
};
