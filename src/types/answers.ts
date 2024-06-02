import problemItem from './problems';

export default interface answersList{
  myAnswer: number;
  problemId: string;
  correctAnswer: number;
};

export interface userAnswerItem {
  problemId: string;
  myAnswer: string;
};

export interface userAnswerSubmitItem {
  answerSubmitList: userAnswerItem[];
};