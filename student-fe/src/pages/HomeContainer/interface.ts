import { StudentState } from '@src/store/models/student/interface';
import { RematchDispatcherAsync } from '@rematch/core';

export interface HomeInterface {
  studentState: StudentState;
  getListEffect: RematchDispatcherAsync;
}
