import { StateModels } from '@src/store/interface';

export const deleteState = ({ student }: StateModels) => {
  return {
    studentState: student,
  };
};
