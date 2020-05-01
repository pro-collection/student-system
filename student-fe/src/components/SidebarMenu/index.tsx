import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Menu } from 'antd';
import { ClickParam } from 'antd/lib/menu';
import {
  ArrowsAltOutlined,
  ShrinkOutlined,
  UserAddOutlined,
  FileSearchOutlined,
  HighlightOutlined,
  UserDeleteOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { sidebarMenuDispatch, sidebarMenuState } from '@src/components/SidebarMenu/consts';
import { SidebarMenuProps } from '@src/components/SidebarMenu/interface';
import { withRouter } from 'react-router';

const SidebarMenu: FC<SidebarMenuProps> = props => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);

  const handleClickMenu = (param: ClickParam) => {
    if (param.key === props.studentState.menuKey) return;
    props.updateDispatch({
      menuKey: param.key,
    });

    switch (param.key) {
      case '1':
        return props.history.push('/');
      case '2':
        return props.history.push('/info');
      case '3':
        return props.history.push('/add');
      case '4':
        return props.history.push('/modify');
      case '5':
        return props.history.push('/delete');
    }
  };

  return (
    <div>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <ArrowsAltOutlined /> : <ShrinkOutlined />}
      </Button>
      <Menu onClick={handleClickMenu} selectedKeys={[props.studentState.menuKey]} mode="inline" theme="dark" inlineCollapsed={collapsed}>
        <Menu.Item key="1" icon={<FileSearchOutlined />}>
          查询学生信息
        </Menu.Item>
        <Menu.Item key="2" icon={<ProfileOutlined />}>
          查询学生详细
        </Menu.Item>
        <Menu.Item key="3" icon={<UserAddOutlined />}>
          添加学生信息
        </Menu.Item>
        <Menu.Item key="4" icon={<HighlightOutlined />}>
          修改学生信息
        </Menu.Item>
        <Menu.Item key="5" icon={<UserDeleteOutlined />}>
          删除学生信息
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(connect(sidebarMenuState, sidebarMenuDispatch)(SidebarMenu));
