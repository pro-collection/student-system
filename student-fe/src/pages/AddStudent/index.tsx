import React, { FC } from 'react';
import LayoutContainer from '../../components/LayoutContainer';
import CreateForm from './CreateForm';

const AddStudent: FC = () => {
  return (
    <div>
      <h2>学生信息管理系统 - 添加学生信息</h2>
      <hr />
      <LayoutContainer>
        <CreateForm />
      </LayoutContainer>
    </div>
  );
};

export default AddStudent;
