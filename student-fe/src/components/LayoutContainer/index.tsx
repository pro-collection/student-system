import React, { FC } from 'react';
import { Col, Row } from 'antd';
import SidebarMenu from '@src/components/SidebarMenu';

const LayoutContainer: FC = props => {
  return (
    <Row gutter={20} style={{ paddingRight: '30px' }}>
      <Col span={3}>
        <SidebarMenu />
      </Col>
      <Col span={21}>{props.children}</Col>
    </Row>
  );
};

export default LayoutContainer;
