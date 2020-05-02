import { StudentItem } from '@src/store/models/student/interface';
import { RematchDispatcherAsync } from '@rematch/core';
import { RouterInfo } from '@src/interface';

export interface MainTableProps extends Partial<RouterInfo> {
  loading: boolean;
  studentList: StudentItem[];
  getListEffect: RematchDispatcherAsync;
}
