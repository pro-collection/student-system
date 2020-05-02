import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { FORM_ITEM_LAYOUT } from '../../consts';
import { StudentFormProps } from './interface';

const StudentForm: FC<StudentFormProps> = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = () => {
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  return (
    <Form {...FORM_ITEM_LAYOUT}>
      <Form.Item label="邮箱">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: '邮箱格式不合规',
            },
            {
              required: true,
              message: '请填写邮箱',
            },
          ],
        })(<Input />)}
      </Form.Item>

      <Form.Item>
        <Button type="primary" onClick={handleSubmit}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create()(StudentForm);
