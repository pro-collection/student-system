import { StateModels } from '@src/store/interface';

export const homeState = ({ student }: StateModels) => {
  return {
    studentState: student,
  };
};

export const homeDispatch = (dispatch: any) => {
  return {
    getListEffect: dispatch.student.getListEffect,
  };
};
