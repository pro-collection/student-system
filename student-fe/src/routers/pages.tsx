import loadableComponent from './loadableComponent';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Pages {
  [key: string]: Function;
}

interface ExportPages {
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const HomeContainer = () => import('../pages/HomeContainer');
const NoMatchContainer = () => import('../pages/NoMatchContainer');
const AddStudent = () => import('../pages/AddStudent');
const DeleteStudent = () => import('../pages/DeleteStudent');
const ModifyStudent = () => import('../pages/ModifyStudent');
const StudentInfo = () => import('../pages/StudentInfo');

const pages: Pages = {
  HomeContainer,
  NoMatchContainer,
  AddStudent,
  DeleteStudent,
  ModifyStudent,
  StudentInfo,
};

const exportPages: ExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
