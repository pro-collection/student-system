import { StudentItem } from '@src/store/models/student/interface';

export interface MainTableProps {
  loading: boolean;
  studentList: StudentItem[];
}
