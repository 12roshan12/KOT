import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

export interface StoreInterface {
  useBS: string;
  currentNonBudgetaryRoute: string;
  currentNonBudgetaryName: string;
  ministryTitle: string;
  etStatus: EtStatus;
  mtStatus: MtStatus;
  mt11: any[];
}

@Injectable({
  providedIn: 'root'
})

export class StoreService {
  store: StoreInterface = {
    currentNonBudgetaryRoute: '',
    currentNonBudgetaryName: '',
    ministryTitle: 'निकायको पृष्ठभूमि',
    useBS: 'true',
    etStatus: initEtStatus,
    mtStatus: initMtStatus,
    mt11: []
  };

  private pvtStore = new BehaviorSubject<StoreInterface>(this.store);


  get status(): Observable<StoreInterface> {
    return this.pvtStore.asObservable();
  }

  constructor() {}

  changeStateMt11(value: any[]): void {
    this.store.mt11 = value;
    this.pvtStore.next(this.store);
  }

  changeState(key: string, value: string, from?: string): void {

    if (key === 'ministryTitle') {
      this.store.ministryTitle = value.replace(/(<([^>]+)>)/gi, ' ');
    }
    if (key === 'currentNonBudgetaryName') {
      this.store.currentNonBudgetaryName = value.replace(/(<([^>]+)>)/gi, ' ');
    }
    if (key === 'currentNonBudgetaryRoute') {
      this.store.currentNonBudgetaryRoute = value;
    }
    if (key === 'useBS') {
      this.store.useBS = value;
    }
    if (key === 'et1') {
      this.store.etStatus.et1 = value;
    }
    if (key === 'et2A') {
      this.store.etStatus.et2A = value;
    }
    if (key === 'et2B') {
      this.store.etStatus.et2B = value;
    }
    if (key === 'et3') {
      this.store.etStatus.et3 = value;
    }
    if (key === 'et4') {
      this.store.etStatus.et4 = value;
    }
    if (key === 'et5') {
      this.store.etStatus.et5 = value;
    }
    if (key === 'et6') {
      this.store.etStatus.et6 = value;
    }
    if (key === 'et7') {
      this.store.etStatus.et7 = value;
    }
    if (key === 'et8') {
      this.store.etStatus.et8 = value;
    }
    if (key === 'et9') {
      this.store.etStatus.et9 = value;
    }
    if (key === 'et10') {
      this.store.etStatus.et10 = value;
    }
    if (key === 'mt1') {
      this.store.mtStatus.mt1 = value;
    }
    if (key === 'mt2') {
      this.store.mtStatus.mt2 = value;
    }
    if (key === 'mt3') {
      this.store.mtStatus.mt3 = value;
    }
    if (key === 'mt4') {
      this.store.mtStatus.mt4 = value;
    }
    if (key === 'mt5') {
      this.store.mtStatus.mt5 = value;
    }
    if (key === 'mt6') {
      this.store.mtStatus.mt6 = value;
    }
    if (key === 'mt7') {
      this.store.mtStatus.mt7 = value;
    }
    if (key === 'mt8') {
      this.store.mtStatus.mt8 = value;
    }
    if (key === 'mt9') {
      this.store.mtStatus.mt9 = value;
    }
    if (key === 'mt10') {
      this.store.mtStatus.mt10 = value;
    }
    if (key === 'mt11') {
      this.store.mtStatus.mt11 = value;
    }
    if (key === 'mt12') {
      this.store.mtStatus.mt12 = value;
    }
    if (key === 'mt13') {
      this.store.mtStatus.mt13 = value;
    }
    if (key === 'mt14') {
      this.store.mtStatus.mt14 = value;
    }
    if (key === 'mt15') {
      this.store.mtStatus.mt15 = value;
    }
    if (key === 'mt16') {
      this.store.mtStatus.mt16 = value;
    }
    if (key === 'mt17') {
      this.store.mtStatus.mt17 = value;
    }
    if (key === 'mt18') {
      this.store.mtStatus.mt18 = value;
    }
    if (key === 'mt19') {
      this.store.mtStatus.mt19 = value;
    }
    if (key === 'mt20') {
      this.store.mtStatus.mt20 = value;
    }
    if (key === 'mt21') {
      this.store.mtStatus.mt21 = value;
    }
    if (key === 'mt22') {
      this.store.mtStatus.mt22 = value;
    }
    if (key === 'mt23') {
      this.store.mtStatus.mt23 = value;
    }
    if (key === 'mt23B') {
      this.store.mtStatus.mt23B = value;
    }
    if (key === 'mt24') {
      this.store.mtStatus.mt24 = value;
    }
    if (key === 'mt25') {
      this.store.mtStatus.mt25 = value;
    }
    if (key === 'mt26') {
      this.store.mtStatus.mt26 = value;
    }
    if (key === 'mt27') {
      this.store.mtStatus.mt27 = value;
    }
    if (key === 'mt28') {
      this.store.mtStatus.mt28 = value;
    }
    if (key === 'mt29') {
      this.store.mtStatus.mt29 = value;
    }
    if (key === 'mt30') {
      this.store.mtStatus.mt30 = value;
    }
    if (key === 'mt31') {
      this.store.mtStatus.mt31 = value;
    }
    if (key === 'mt32') {
      this.store.mtStatus.mt32 = value;
    }
    if (key === 'mt33') {
      this.store.mtStatus.mt33 = value;
    }
    if (key === 'mt34') {
      this.store.mtStatus.mt34 = value;
    }
    if (key === 'mt35') {
      this.store.mtStatus.mt35 = value;
    }
    if (key === 'mt36') {
      this.store.mtStatus.mt36 = value;
    }
    if (key === 'mt37') {
      this.store.mtStatus.mt37 = value;
    }

    this.pvtStore.next(this.store);
  }

}



export interface EtStatus {
  et1: string;
  et2A: string;
  et2B: string;
  et3: string;
  et4: string;
  et5: string;
  et6: string;
  et7: string;
  et8: string;
  et9: string;
  et10: string;
}

export const initEtStatus: EtStatus = {
  et1: 'gray',
  et2A: 'gray',
  et2B: 'gray',
  et3: 'gray',
  et4: 'gray',
  et5: 'gray',
  et6: 'gray',
  et7: 'gray',
  et8: 'gray',
  et9: 'partial',
  et10: 'partial',
};


export interface MtStatus {
  mt1: string;
  mt2: string;
  mt3: string;
  mt4: string;
  mt5: string;
  mt6: string;
  mt7: string;
  mt8: string;
  mt9: string;
  mt10: string;
  mt11: string;
  mt12: string;
  mt13: string;
  mt14: string;
  mt15: string;
  mt16: string;
  mt17: string;
  mt18: string;
  mt19: string;
  mt20: string;
  mt21: string;
  mt22: string;
  mt23: string;
  mt23B: string;
  mt24: string;
  mt25: string;
  mt26: string;
  mt27: string;
  mt28: string;
  mt29: string;
  mt30: string;
  mt31: string;
  mt32: string;
  mt33: string;
  mt34: string;
  mt35: string;
  mt36: string;
  mt37: string;

}

export const initMtStatus: MtStatus = {
  mt1: 'gray',
  mt2: 'gray',
  mt3: 'gray',
  mt4: 'gray',
  mt5: 'gray',
  mt6: 'gray',
  mt7: 'gray',
  mt8: 'gray',
  mt9: 'gray',
  mt10: 'gray',
  mt11: 'gray',
  mt12: 'gray',
  mt13: 'gray',
  mt14: 'gray',
  mt15: 'gray',
  mt16: 'gray',
  mt17: 'gray',
  mt18: 'gray',
  mt19: 'gray',
  mt20: 'gray',
  mt21: 'gray',
  mt22: 'gray',
  mt23: 'gray',
  mt23B: 'gray',
  mt24: 'gray',
  mt25: 'gray',
  mt26: 'gray',
  mt27: 'gray',
  mt28: 'gray',
  mt29: 'gray',
  mt30: 'gray',
  mt31: 'gray',
  mt32: 'gray',
  mt33: 'gray',
  mt34: 'gray',
  mt35: 'gray',
  mt36: 'gray',
  mt37: 'gray'
};
