import React, { FC } from 'react';
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd';
import { toString, isEmpty } from 'lodash';
import moment from 'moment';
import { FORM_ITEM_LAYOUT } from '@src/consts';
import { StudentFormProps } from './interface';
import styles from './style.less';
import { postStudentApi } from '@src/server';

const { Option } = Select;

const StudentForm: FC<StudentFormProps> = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = () => {
    const { validateFieldsAndScroll, resetFields } = props.form;
    validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        // 特殊处理日期
        if (values.birthday) values.birthday = moment(values.birthday).valueOf();

        // 提交
        const res = await postStudentApi(values);
        if (!isEmpty(res)) resetFields();
      }
    });
  };

  const handleRest = () => {
    const { resetFields } = props.form;
    resetFields();
  };

  return (
    <Form {...FORM_ITEM_LAYOUT}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="学号">
            {getFieldDecorator('number', {
              rules: [
                {
                  required: true,
                  message: '请填写学号',
                },
                {
                  validator: (_: any, value: number, callback) => {
                    if (toString(value).length !== 10) return callback('学生学号必须为十位数');
                    return callback();
                  },
                },
              ],
            })(<InputNumber placeholder={'请填写学号'} style={{ width: '100%' }} />)}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="姓名">
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '请填写姓名',
                },
              ],
            })(<Input placeholder={'请填写姓名'} style={{ width: '100%' }} />)}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="性别">
            {getFieldDecorator('gender', {
              rules: [
                {
                  required: true,
                  message: '请选择性别',
                },
              ],
            })(
              <Select placeholder={'请选择性别'}>
                <Option value="1">男</Option>
                <Option value="2">女</Option>
              </Select>,
            )}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="电话号码">
            {getFieldDecorator('phone', {
              rules: [
                {
                  required: true,
                  message: '请填写电话号码',
                },
                {
                  validator: (_: any, value: string, callback) => {
                    if (!/^((1[3-9]\d{9})|(\d{3,4}-\d{7,10}))$/.test(value)) return callback('电话号码要合规');
                    return callback();
                  },
                },
              ],
            })(<Input placeholder="请输入电话号码" />)}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="年级">
            {getFieldDecorator('grade')(
              <Select placeholder="请选择年级">
                <Option value="1">大一</Option>
                <Option value="2">大二</Option>
                <Option value="2">大三</Option>
                <Option value="2">大四</Option>
              </Select>,
            )}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="班级">
            {getFieldDecorator('classNumber')(<InputNumber placeholder={'请输入班级'} style={{ width: '100%' }} />)}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="邮箱">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: '请输入正确的邮箱地址',
                },
              ],
            })(<Input placeholder="请输入邮箱地址" />)}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="家庭地址">{getFieldDecorator('address')(<Input placeholder="请输入家庭地址" />)}</Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="出生日期">
            {getFieldDecorator('birthday')(<DatePicker style={{ width: '100%' }} placeholder="请选择出生日期" />)}
          </Form.Item>
        </Col>
      </Row>

      <div className={styles['submit-container']}>
        <Button type="primary" onClick={handleSubmit}>
          确认
        </Button>

        <Button type="danger" ghost className="ml24" onClick={handleRest}>
          重置
        </Button>
      </div>
    </Form>
  );
};

export default Form.create()(StudentForm);
