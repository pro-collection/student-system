import { WrappedFormUtils } from 'antd/es/form/Form';
import { FormType } from '@src/consts';
import { StudentItem } from '@src/store/models/student/interface';
import { RouterInfo } from '@src/interface';

export interface StudentFormProps extends StudentFormWrapperProps {
  form: WrappedFormUtils;
}

export interface StudentFormWrapperProps extends Partial<RouterInfo> {
  userType: FormType;
  currentStudentInfo?: StudentItem;
  studentId?: string;
}
