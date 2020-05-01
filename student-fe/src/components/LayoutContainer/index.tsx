import React, { FC } from 'react';
import { Col, Row } from 'antd';
import SidebarMenu from '@src/components/SidebarMenu';

const LayoutContainer: FC = props => {
  return (
    <Row gutter={20}>
      <Col span={3}>
        <SidebarMenu />
      </Col>
      <Col style={{ paddingRight: '30px' }} span={21}>
        {props.children}
      </Col>
    </Row>
  );
};

export default LayoutContainer;
