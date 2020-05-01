import { StateModels } from '@src/store/interface';
import { StudentAction } from '@src/store/models/student/interface';

export const homeState = ({ student }: StateModels) => {
  return {
    studentState: student,
  };
};

export const homeDispatch = ({ student }: { student: StudentAction }) => {
  return {
    getListEffect: student.getListEffect,
  };
};
