import React, { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { CreateFormProps, CreateFormWrapperProps } from './interface';
import { FORM_ITEM_LAYOUT } from '@src/consts';

const CreateForm: FC<CreateFormProps> = props => {
  const { getFieldDecorator } = props.form;

  return (
    <Form {...FORM_ITEM_LAYOUT}>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="姓名" required>
            {getFieldDecorator('name', {
              rules: [
                {
                  required: true,
                  message: '学生姓名必填',
                },
              ],
            })(<Input placeholder="请填写姓名" />)}
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="年龄" required>
            {getFieldDecorator('age', {
              rules: [
                {
                  required: true,
                  message: '学生姓名必填',
                },
              ],
            })(<Input placeholder="请填写姓名" />)}
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default (Form.create()(CreateForm) as unknown) as FC<CreateFormWrapperProps>;
