import { makeAutoObservable, runInAction } from 'mobx';

class AlertStore {
  alertOpen:boolean = false;

  serverity:string = 'error';

  message:string = '에러가 발생했습니다.';

  linkTo:string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAlertClose = () => {
    this.alertOpen = false;
  };

  setAlertOpen = (serverity: string, message: string, linkTo?: string) => {
	runInAction(() => {
	  this.serverity = serverity;
	  this.alertOpen = true;
	  this.message = message;
	  this.linkTo = linkTo || this.linkTo;
	})
  };
}

export default AlertStore;