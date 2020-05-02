import { axios } from '@src/utils';
import { StudentItem } from '@src/store/models/student/interface';
import { message } from 'antd';

// 获取列表
export const getList = (id?: number) => {
  return axios({
    url: '/api/student/list/',
    params: {
      sceneId: id,
    },
  })
    .then((res: object) => res)
    .catch((err: object) => err);
};

// 提交表单
export const postStudentApi = (formData: StudentItem) => {
  return axios({
    url: '/api/student/create',
    data: formData,
    method: 'post',
  })
    .then((res: object) => {
      message.success('添加学成成功');
      return res;
    })
    .catch(() => message.error('添加学生失败， 请重试'));
};
