import { createContext, useContext } from 'react';
import ProblemStore from './problem/problemStore';
import UserStore from './user/userStore';
import WorkbookStore from './workbook/workbookStore';

const userStore = new UserStore();
const workbookStore = new WorkbookStore();
const problemStore = new ProblemStore();

export const store = {
  userStore,
  workbookStore,
  problemStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
