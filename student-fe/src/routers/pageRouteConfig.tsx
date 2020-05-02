import pages from './pages';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

/*interface*/
interface StaticRoutes {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact: boolean;
  title: string;
  metas?: any[];
}

const staticRotes: StaticRoutes[] = [
  {
    path: '/',
    component: pages.HomeContainer,
    exact: true,
    title: '学生信息列表',
    metas: [],
  },
  {
    path: '/add',
    component: pages.AddStudent,
    exact: true,
    title: '添加学生信息',
    metas: [],
  },
  {
    path: '/delete',
    component: pages.DeleteStudent,
    exact: true,
    title: '删除学生信息',
    metas: [],
  },
  {
    path: '/modify',
    component: pages.ModifyStudent,
    exact: true,
    title: '修改学生信息',
    metas: [],
  },
  {
    path: '/info',
    component: pages.StudentInfo,
    exact: true,
    title: '学生基础信息查看',
    metas: [],
  },
  {
    path: '',
    component: pages.NoMatchContainer,
    exact: true,
    title: '没有找到页面',
    metas: [],
  },
];

export default staticRotes;
