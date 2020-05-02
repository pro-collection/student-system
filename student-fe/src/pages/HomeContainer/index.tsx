import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { homeDispatch, homeState } from '@src/pages/HomeContainer/state';
import MainTable from '@src/pages/HomeContainer/components/MainTable';
import SearchInput from '@src/pages/HomeContainer/components/SearchInput';
import { HomeInterface } from '@src/pages/HomeContainer/interface';
import LayoutContainer from '@src/components/LayoutContainer';

const HomeContainer: FC<HomeInterface> = props => {
  useEffect(() => {
    props.getListEffect();
  }, []);

  return (
    <div>
      <h2>学生信息管理系统</h2>
      <hr />
      <LayoutContainer>
        <SearchInput />
        <MainTable
          history={props.history}
          getListEffect={props.getListEffect}
          studentList={props.studentState.studentList}
          loading={props.studentState.loading}
        />
      </LayoutContainer>
    </div>
  );
};

export default connect(homeState, homeDispatch)(HomeContainer);
