import { createContext, useContext } from 'react';
import UserStore from './user/userStore';
import WorkbookStore from './workbook/workbookStore';

const userStore = new UserStore();
const workbookStore = new WorkbookStore();

export const store = {
  userStore,
  workbookStore,
};

export const StoreContext = createContext(store);
export const useStore = () => {
  return useContext(StoreContext);
};
