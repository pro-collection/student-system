import { StateModels } from '@src/store/interface';

export const modifyState = ({ student }: StateModels) => {
  return {
    studentState: student,
  };
};
