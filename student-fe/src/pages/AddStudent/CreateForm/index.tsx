import React, { FC } from 'react';
import { Form } from 'antd';

const CreateForm: FC = () => {
  return (
    <Form>
      <Form.Item label="姓名" required></Form.Item>
    </Form>
  );
};

export default CreateForm;
