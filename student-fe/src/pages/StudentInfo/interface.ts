import { StudentState } from '@src/store/models/student/interface';
import { RouterInfo } from '@src/interface';

export interface StudentInfoProps extends RouterInfo {
  studentState: StudentState;
}
