import React, { FC } from 'react';
import { Descriptions } from 'antd';
import moment from 'moment';
import { DetailProps } from '@src/pages/StudentInfo/Detail/interface';
import { DATE_FORMAT } from '@src/consts';

const Detail: FC<DetailProps> = props => {
  const gender = () => {
    if (props.currentStudentInfo.gender === '1') return '男';
    return '女';
  };

  const getGrade = () => {
    switch (props.currentStudentInfo.grade) {
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
  };

  return (
    <div>
      <Descriptions title="Responsive Descriptions" bordered column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
        <Descriptions.Item label="学号">{props.currentStudentInfo.number}</Descriptions.Item>
        <Descriptions.Item label="姓名">{props.currentStudentInfo.name}</Descriptions.Item>
        <Descriptions.Item label="性别">{gender()}</Descriptions.Item>
        <Descriptions.Item label="电话号码">{props.currentStudentInfo.phone}</Descriptions.Item>
        <Descriptions.Item label="年级">{getGrade()}</Descriptions.Item>
        <Descriptions.Item label="班级">{props.currentStudentInfo.classNumber || '-'}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{props.currentStudentInfo.email || '-'}</Descriptions.Item>
        <Descriptions.Item label="地址">{props.currentStudentInfo.address || '-'}</Descriptions.Item>
        <Descriptions.Item label="出生年月日">
          {props.currentStudentInfo.birthday ? moment(props.currentStudentInfo.birthday).format(DATE_FORMAT) : '-'}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Detail;
