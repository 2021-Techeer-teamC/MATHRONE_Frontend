import { createContext, useContext } from 'react';
import ProblemStore from './problem/problemStore';
import UserStore from './user/userStore';
import WorkbookStore from './workbook/workbookStore';
import AnswerStore from './answer/answerStore';
import AlertStore from './alert/alertStore';

const alertStore = new AlertStore();
const userStore = new UserStore({alertStore});
const workbookStore = new WorkbookStore();
const problemStore = new ProblemStore();
const answerStore = new AnswerStore();

export const store = {
  userStore,
  workbookStore,
  problemStore,
  answerStore,
  alertStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
