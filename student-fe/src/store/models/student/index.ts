import { ModelConfig } from '@rematch/core';
import { StudentState } from '@src/store/models/student/interface';
import { studentDefault } from '@src/store/models/student/consts';
import { StateModels } from '@src/store/interface';
import { getList } from '@src/server';

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
    /**
     * 异步方法
     * @param payload 这个是传入的产生值
     * @param student 这个是所有的状态的值
     */
    async getListEffect(payload, { student }: StateModels) {
      const list = await getList();
      console.log('payload', payload);
      console.log('student', student);
      console.log('list', list);
    },
  },
};

export default student;
