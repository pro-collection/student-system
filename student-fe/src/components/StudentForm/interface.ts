import { WrappedFormUtils } from 'antd/es/form/Form';
import { FormType } from '@src/consts';
import { StudentItem } from '@src/store/models/student/interface';

export interface StudentFormProps extends StudentFormWrapperProps {
  form: WrappedFormUtils;
}

export interface StudentFormWrapperProps {
  userType: FormType;
  currentStudentInfo?: StudentItem;
  studentId?: string;
}
