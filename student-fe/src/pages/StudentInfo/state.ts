import { StateModels } from '@src/store/interface';

export const infoState = ({ student }: StateModels) => {
  return {
    studentState: student,
  };
};
