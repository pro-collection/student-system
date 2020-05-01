import * as utils from '@src/utils';

const { axios } = utils;

export const getList = (id: number) => {
  return axios({
    url: '/api/student/list/',
    params: {
      sceneId: id,
    },
  })
    .then((res: object) => res)
    .catch((err: object) => err);
};
