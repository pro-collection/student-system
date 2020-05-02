import { axios } from '@src/utils';
import { StudentItem } from '@src/store/models/student/interface';
import { message } from 'antd';
import { ApiResponse } from '@src/server/interface';

// 获取列表
export const getList = (params?: any) => {
  return axios({
    url: '/api/student/list/',
    params,
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
    .then((res: ApiResponse) => {
      if (res.code !== 200) {
        return message.error(res.message);
      }
      message.success('添加学成成功');
      return res;
    })
    .catch(() => message.error('添加学生失败， 请重试'));
};

// 删除表单
export const deleteStudentApi = (id: number) => {
  return axios({
    url: `/api/student/${id}`,
    method: 'delete',
  })
    .then((res: ApiResponse) => {
      if (res.code === 200 && res.data) {
        message.success('删除学生信息成功');
      } else {
        message.error('删除学生信息失败');
      }
      return res;
    })
    .catch(() => {
      message.error('删除学生信息失败');
    });
};

// 更新表单
export const putStudentApi = (id: string, formData: StudentItem) => {
  return axios({
    url: `/api/student/${id}`,
    data: formData,
    method: 'put',
  })
    .then((res: ApiResponse) => {
      if (res.code !== 200) {
        return message.error(res.message);
      }
      message.success('更新学生信息成功');
      return res;
    })
    .catch(() => message.error('更新学生失败， 请重试'));
};
