import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'antd';
import { homeDispatch, homeState } from '@src/pages/HomeContainer/state';
import SidebarMenu from '@src/components/SidebarMenu';
import MainTable from '@src/pages/HomeContainer/components/MainTable';
import SearchInput from '@src/pages/HomeContainer/components/SearchInput';
import { HomeInterface } from '@src/pages/HomeContainer/interface';

const HomeContainer: FC<HomeInterface> = props => {
  useEffect(() => {
    props.getListEffect(123).then(res => {
      console.log('res', res);
    });
  }, []);

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
