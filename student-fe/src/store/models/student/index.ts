import { ModelConfig } from '@rematch/core';
import { StudentState } from '@src/store/models/student/interface';
import { studentDefault } from '@src/store/models/student/consts';

const student: ModelConfig<StudentState> = {
  state: studentDefault,
  reducers: {
    updateDispatch(state, payload: StudentState) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    async getListEffect(payload, rootState: StudentState) {
      console.log(payload);
      console.log(rootState);
    },
  },
};

export default student;
