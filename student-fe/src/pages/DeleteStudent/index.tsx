import React, { FC } from 'react';
import { connect } from 'react-redux';
import LayoutContainer from '@src/components/LayoutContainer';
import { get, isEmpty, toString, toNumber } from 'lodash';
import queryString from 'query-string';
import { StudentItem } from '@src/store/models/student/interface';
import Detail from '@src/pages/StudentInfo/Detail';
import { DeleteProps } from '@src/pages/DeleteStudent/interface';
import { deleteState } from '@src/pages/DeleteStudent/state';
import { Button, message, Modal } from 'antd';
import { deleteStudentApi } from '@src/server';

const DeleteStudent: FC<DeleteProps> = props => {
  // @ts-ignore
  const id: string = get(queryString.parse(props.history.location.search), 'id', '') || '';
  // @ts-ignore
  const currentStudentInfo: StudentItem = props.studentState.studentList.find(item => toString(item.id) === id);

  const handleDelete = () => {
    Modal.confirm({
      title: '请确认删除该学生信息',
      onOk: async () => {
        const res = await deleteStudentApi(toNumber(id));
        if (!isEmpty(res)) {
          // 请求新的裂帛啊数据
          props.history.push('/', {
            // key: '1',
          });
        }
      },
    });
  };
  return (
    <div>
      <h2>学生信息管理系统 - 删除学生基础信息</h2>
      <hr />
      <LayoutContainer>
        {!isEmpty(currentStudentInfo) ? (
          <>
            <Detail currentStudentInfo={currentStudentInfo} />
            <div className="mt24 text-center">
              <Button onClick={handleDelete} type="danger">
                删除
              </Button>
            </div>
          </>
        ) : (
          <p>请从列表点击删除进入当前页面 删除学生详情信息</p>
        )}
      </LayoutContainer>
    </div>
  );
};

export default connect(deleteState)(DeleteStudent);
