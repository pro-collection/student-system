import React, { FC, useState } from 'react';
import { Button, Menu } from 'antd';
import {
  ArrowsAltOutlined,
  ShrinkOutlined,
  UserAddOutlined,
  FileSearchOutlined,
  HighlightOutlined,
  UserDeleteOutlined,
} from '@ant-design/icons';

const SidebarMenu: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(!collapsed);
  return (
    <div>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <ArrowsAltOutlined /> : <ShrinkOutlined />}
      </Button>
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={collapsed}>
        <Menu.Item key="1" icon={<FileSearchOutlined />}>
          查询学生信息
        </Menu.Item>
        <Menu.Item key="2" icon={<UserAddOutlined />}>
          添加学生信息
        </Menu.Item>
        <Menu.Item key="3" icon={<HighlightOutlined />}>
          修改学生信息
        </Menu.Item>
        <Menu.Item key="4" icon={<UserDeleteOutlined />}>
          删除学生信息
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SidebarMenu;
