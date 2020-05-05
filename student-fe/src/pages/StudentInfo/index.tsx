import React, { FC } from 'react';
import { connect } from 'react-redux';
import LayoutContainer from '@src/components/LayoutContainer';
import { get, toString, isEmpty } from 'lodash';
import queryString from 'query-string';
import { StudentItem } from '@src/store/models/student/interface';
import { StudentInfoProps } from '@src/pages/StudentInfo/interface';
import Detail from '@src/pages/StudentInfo/Detail';
import { infoState } from '@src/pages/StudentInfo/state';

const StudentInfo: FC<StudentInfoProps> = props => {
  // @ts-ignore
  const id: string = get(queryString.parse(props.history.location.search), 'id', '') || '';
  // @ts-ignore
  const currentStudentInfo: StudentItem = props.studentState.studentList.find(item => toString(item.id) === id);
  return (
    <div>
      <h2>学生信息管理系统 - 学生基础信息查看</h2>
      <hr />
      <LayoutContainer>
        {!isEmpty(currentStudentInfo) ? (
          <Detail currentStudentInfo={currentStudentInfo} />
        ) : (
          <p>请从列表点击详情进入当前页面 查看学生详情信息</p>
        )}
      </LayoutContainer>
    </div>
  );
};

export default connect(infoState)(StudentInfo);
