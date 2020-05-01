import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { CreateFormProps, CreateFormWrapperProps } from './interface';

const CreateForm: FC<CreateFormProps> = props => {
  const { getFieldDecorator } = props.form;

  return (
    <Form>
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
    </Form>
  );
};

export default (Form.create()(CreateForm) as unknown) as FC<CreateFormWrapperProps>;
