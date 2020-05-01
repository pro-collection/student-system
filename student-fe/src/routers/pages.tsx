import loadableComponent from './loadableComponent';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Pages {
  [key: string]: Function;
}

interface ExportPages {
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const HomeContainer = () => import('../pages/HomeContainer');
const NoMatchContainer = () => import('../pages/NoMatchContainer');

const pages: Pages = {
  HomeContainer,
  NoMatchContainer,
};

const exportPages: ExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
