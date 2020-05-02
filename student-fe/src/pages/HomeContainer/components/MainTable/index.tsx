import React, { FC } from 'react';
import { Button, Table } from 'antd';
import { MainTableProps } from '@src/pages/HomeContainer/components/MainTable/interface';
import { StudentItem } from '@src/store/models/student/interface';
import dayjs from 'dayjs';
import { DATE_FORMAT } from '@src/consts';

const MainTable: FC<MainTableProps> = props => {
  const columns = [
    {
      title: '学号',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      render: (gender: number) => {
        if (gender === 1) return '男';
        return '女';
      },
    },
    {
      title: '电话号码',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '年级',
      dataIndex: 'grade',
      key: 'grade',
    },
    {
      title: '班级',
      dataIndex: 'classNumber',
      key: 'classNumber',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '出生年月日',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (item: StudentItem) => {
        return dayjs(item.birthday).format(DATE_FORMAT);
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (item: StudentItem) => (
        <span>
          <Button
            style={{ marginRight: 16 }}
            onClick={() => {
              console.log(item.name);
            }}>
            修改数据
          </Button>
          <Button ghost type={'danger'}>
            删除数据
          </Button>
        </span>
      ),
    },
  ];

  return (
    <Table
      bordered
      loading={props.loading}
      columns={columns}
      dataSource={props.studentList.map(item => Object.assign({}, { ...item }, { key: item.id }))}
    />
  );
};

export default MainTable;
