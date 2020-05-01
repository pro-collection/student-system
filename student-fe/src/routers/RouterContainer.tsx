import React, { FC } from 'react';
import { Route } from 'react-router';

const RouterContainer: FC<any> = props => {
  document.title = props.title;
  return <Route {...props} />;
};

export default RouterContainer;
