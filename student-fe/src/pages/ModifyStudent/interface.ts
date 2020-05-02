import { RouterInfo } from '@src/interface';
import { StudentState } from '@src/store/models/student/interface';

export interface ModifyStudentProps extends RouterInfo {
  studentState: StudentState;
}
