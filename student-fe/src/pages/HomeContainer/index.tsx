import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { CountAction, CountState } from '@src/store/models/count';
import { homeDispatch, homeState } from '@src/pages/HomeContainer/state';
import SidebarMenu from '@src/components/SidebarMenu';
import MainTable from '@src/pages/HomeContainer/components/MainTable';
import SearchInput from '@src/pages/HomeContainer/components/SearchInput';

interface Props {
  countState: CountState;
  countDispatch: CountAction;
}

const HomeContainer: FC<Props> = () => {
  return (
    <div>
      <h2>学生信息管理系统</h2>
      <hr />
      <Row gutter={20}>
        <Col span={4}>
          <SidebarMenu />
        </Col>
        <Col span={20}>
          <SearchInput />
          <MainTable />
        </Col>
      </Row>
    </div>
  );
};

export default connect(homeState, homeDispatch)(HomeContainer);
