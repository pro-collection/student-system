import React, { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { get } from 'lodash';
import { ClickParam } from 'antd/lib/menu';
import { sidebarMenuDispatch, sidebarMenuState } from '@src/components/SidebarMenu/consts';
import { SidebarMenuProps, SidebarMenuWrapperProps } from '@src/components/SidebarMenu/interface';
import { withRouter } from 'react-router';

const SidebarMenu: FC<SidebarMenuProps> = props => {
  const [key, setKey] = useState('1');

  useEffect(() => {
    setKey(get(props.location.state, 'key', '1') || '1');
  }, [props.location.state]);

  const handleClickMenu = (param: ClickParam) => {
    if (param.key === key) return;
    props.updateDispatch({
      menuKey: param.key,
    });

    switch (param.key) {
      case '1':
        return props.history.push('/', {
          key: '1',
        });
      case '2':
        return props.history.push('/info', {
          key: '2',
        });
      case '3':
        return props.history.push('/add', {
          key: '3',
        });
      case '4':
        return props.history.push('/modify', {
          key: '4',
        });
      case '5':
        return props.history.push('/delete', {
          key: '5',
        });
    }
  };

  return (
    <div>
      <Menu onClick={handleClickMenu} selectedKeys={[key]} mode="inline" theme="dark">
        <Menu.Item key="1">查询学生信息</Menu.Item>
        <Menu.Item key="2">查询学生详细</Menu.Item>
        <Menu.Item key="3">添加学生信息</Menu.Item>
        <Menu.Item key="4">修改学生信息</Menu.Item>
        <Menu.Item key="5">删除学生信息</Menu.Item>
      </Menu>
    </div>
  );
};

export default (withRouter(connect(sidebarMenuState, sidebarMenuDispatch)(SidebarMenu)) as unknown) as FC<SidebarMenuWrapperProps>;
