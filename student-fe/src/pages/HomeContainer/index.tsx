import React, { FC } from 'react';
import { connect } from 'react-redux';
import { CountAction, CountState } from '@src/store/models/count';
import { homeDispatch, homeState } from '@src/pages/HomeContainer/state';

interface Props {
  countState: CountState;
  countDispatch: CountAction;
}

const HomeContainer: FC<Props> = () => {
  return (
    <div>
      <h2>学生信息管理系统</h2>
    </div>
  );
};

export default connect(homeState, homeDispatch)(HomeContainer);
