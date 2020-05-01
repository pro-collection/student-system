import React from 'react';
import Loadable from 'react-loadable';
// const Loadable = require('react-loadable');
const Loading = (props: { error: any }) => {
  const { error } = props;
  if (error) {
    return (
      <div>
        <p>{error.stack ? error.stack : ''}</p>
      </div>
    );
  }
  return <div> </div>;
};

interface Config {
  loader: any;
  loading: any;
  delay: number;
  render?: any;
}

const loadableComponent = (loader: any, render?: any) => {
  const config: Config = {
    loader,
    loading: Loading,
    delay: 1000,
  };
  if (render) {
    config.render = render;
  }
  return Loadable(config);
};

export default loadableComponent;
