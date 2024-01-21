import { createContext, useContext } from 'react';
import ProblemStore from './problem/problemStore';
import UserStore from './user/userStore';
import WorkbookStore from './workbook/workbookStore';
import AnswerStore from './answer/answerStore';

const userStore = new UserStore();
const workbookStore = new WorkbookStore();
const problemStore = new ProblemStore();
const answerStore = new AnswerStore();

export const store = {
  userStore,
  workbookStore,
  problemStore,
  answerStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
