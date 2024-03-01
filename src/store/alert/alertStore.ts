import { makeAutoObservable, runInAction } from 'mobx';
import type { Color } from '@material-ui/lab/Alert'

class AlertStore {
  alertOpen:boolean = false;

  serverity:Color = 'error';

  message:string = '에러가 발생했습니다.';

  linkTo:string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAlertClose = () => {
    this.alertOpen = false;
  };

  setAlertOpen = (serverity: Color, message: string, linkTo?: string) => {
	runInAction(() => {
	  this.serverity = serverity;
	  this.alertOpen = true;
	  this.message = message;
	  this.linkTo = linkTo || this.linkTo;
	})
  };
}

export default AlertStore;