import { StudentState } from '@src/store/models/student/interface';
import { RematchDispatcherAsync } from '@rematch/core';
import { RouterInfo } from '@src/interface';

export interface HomeInterface extends RouterInfo {
  studentState: StudentState;
  getListEffect: RematchDispatcherAsync;
}
