import { StudentItem } from '@src/store/models/student/interface';
import { RematchDispatcherAsync } from '@rematch/core';

export interface MainTableProps {
  loading: boolean;
  studentList: StudentItem[];
  getListEffect: RematchDispatcherAsync;
}
