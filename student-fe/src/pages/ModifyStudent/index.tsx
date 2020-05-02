import React, { FC } from 'react';
import { get, toString, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import queryString from 'query-string';
import LayoutContainer from '@src/components/LayoutContainer';
import StudentForm from '@src/components/StudentForm';
import { FormType } from '@src/consts';
import { modifyState } from '@src/pages/ModifyStudent/state';
import { ModifyStudentProps } from '@src/pages/ModifyStudent/interface';
import { StudentItem } from '@src/store/models/student/interface';

const ModifyStudent: FC<ModifyStudentProps> = props => {
  // @ts-ignore
  const id: string = get(queryString.parse(props.history.location.search), 'id', '') || '';
  const currentStudentInfo: StudentItem | undefined = props.studentState.studentList.find(item => toString(item.id) === id);

  return (
    <div>
      <h2>学生信息管理系统 - 修改学生信息</h2>
      <hr />
      <LayoutContainer>
        {!isEmpty(currentStudentInfo) ? (
          <StudentForm history={props.history} studentId={id} currentStudentInfo={currentStudentInfo} userType={FormType.update} />
        ) : (
          <p>请从列表点击修改进入当前页面 修改学生信息</p>
        )}
      </LayoutContainer>
    </div>
  );
};

export default connect(modifyState)(ModifyStudent);
