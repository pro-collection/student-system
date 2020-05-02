import React, { FC } from 'react';
import { Col, Row } from 'antd';
import SidebarMenu from '@src/components/SidebarMenu';
import styles from './style.less';

const LayoutContainer: FC = props => {
  return (
    <Row>
      <Col span={3} className={styles.pr24}>
        <SidebarMenu />
      </Col>
      <Col span={21} className={styles.pr24}>
        {props.children}
      </Col>
    </Row>
  );
};

export default LayoutContainer;
