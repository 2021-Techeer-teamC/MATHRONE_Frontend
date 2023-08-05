import { createContext, useContext } from 'react';
import AccountStore from './account/accountStore';

const accountStore = new AccountStore();

export const store = {
  accountStore,
};

export const StoreContext = createContext(store);
export const useStore = () => {
  return useContext(StoreContext);
};
