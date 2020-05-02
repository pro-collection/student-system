import { ModelConfig } from '@rematch/core';
import { get } from 'lodash';
import { message } from 'antd';
import { StudentState } from '@src/store/models/student/interface';
import { studentDefault } from '@src/store/models/student/consts';
import { getList } from '@src/server';

const student: ModelConfig<StudentState> = {
  state: studentDefault,
  reducers: {
    updateDispatch(state, payload?: StudentState) {
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
    // async getListEffect(payload, { student }: StateModels) {
    //   await this.updateDispatch({ loading: true });
    //   const list = await getList();
    //   this.updateDispatch({ loading: false });
    //   this.updateDispatch({ studentList: list });
    //   return list;
    // },
    async getListEffect() {
      await this.updateDispatch({ loading: true });
      const responseData = await getList();
      const code = get(responseData, 'code');
      const list = get(responseData, 'data', []) || [];
      const messageString = get(responseData, 'message', '');
      if (code === 200) {
        this.updateDispatch({ loading: false });
        this.updateDispatch({ studentList: list });
        return list;
      }
      return message.error(messageString || '获取学生列表失败');
    },
  },
};

export default student;
