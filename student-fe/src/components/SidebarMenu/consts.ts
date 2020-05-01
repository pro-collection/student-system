import { StudentAction } from '../../store/models/student/interface';
import { StateModels } from '../../store/interface';

export const sidebarMenuState = ({ student }: StateModels) => {
  return {
    studentState: student,
  };
};

export const sidebarMenuDispatch = ({ student }: { student: StudentAction }): any => {
  return {
    updateDispatch: student.updateDispatch,
  };
};
