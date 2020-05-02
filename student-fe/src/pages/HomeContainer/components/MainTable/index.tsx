import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import { Button, Table } from 'antd';
import { MainTableProps } from '@src/pages/HomeContainer/components/MainTable/interface';
import { StudentItem } from '@src/store/models/student/interface';
import moment from 'moment';
import { DATE_FORMAT } from '@src/consts';
import { deleteStudentApi } from '@src/server';

const MainTable: FC<MainTableProps> = props => {
  const handleDelete = async (id: number) => {
    const res = await deleteStudentApi(id);
    console.log(res);
    if (!isEmpty(res)) {
      // 请求新的裂帛啊数据
      await props.getListEffect();
    }
  };

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
      render: (gender: string) => {
        if (gender === '1') return '男';
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
      render: (grade: number) => {
        switch (grade) {
          case 1:
            return '大一';
          case 2:
            return '大二';
          case 3:
            return '大三';
          case 4:
            return '大四';
          default:
            return '-';
        }
      },
    },
    {
      title: '班级',
      dataIndex: 'classNumber',
      key: 'classNumber',
      render: (classNumber: number) => {
        if (classNumber) return classNumber;
        return '-';
      },
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      render: (email: string) => {
        if (email) return email;
        return '-';
      },
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
      render: (address: string) => {
        if (address) return address;
        return '-';
      },
    },
    {
      title: '出生年月日',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (birthday: number) => {
        if (birthday) return moment(birthday).format(DATE_FORMAT);
        return '-';
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
          <Button ghost type={'danger'} onClick={() => handleDelete(item.id)}>
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
