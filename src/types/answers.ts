import problemItem from './problems';

export default interface answersList{
    myAnswer: number;
    problemId: string;
    correctAnswer: number;
}

export interface userAnswerItem {
  answerSubmitList: problemItem[];
  isAll: boolean;
}