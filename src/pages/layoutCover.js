import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { connect } from "react-redux";
import './layout.css'
import {
     MenuUnfoldOutlined,
     MenuFoldOutlined,
     AreaChartOutlined,
     CommentOutlined,
     UserAddOutlined,
} from "@ant-design/icons";
import _ from "lodash";
const { Header, Sider, Content } = Layout;

const MENU = [
     {
          name: "Message of The Day",
          url: "/",
          icon: CommentOutlined,
          position: "fixed",
     },
     {
          name: "Video Upload",
          url: "genral-video-upload",
          icon: UserAddOutlined,
          position: "fixed",

     },
     {
          name: "Headlines one",
          url: "/message-upload-for-first-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     },
     {
          name: "Headlines Two",
          url: "/message-upload-for-second-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines Three",
          url: "/message-upload-for-third-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines Four",
          url: "/message-upload-for-fourth-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines Five",
          url: "/message-upload-for-fiveth-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines Six",
          url: "/message-upload-for-sixth-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines seven",
          url: "/message-upload-for-seventh-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines Eight",
          url: "/message-upload-for-eighth-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines Nine",
          url: "/message-upload-for-ninth-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, {
          name: "Headlines Ten",
          url: "/message-upload-for-tenth-headlines",
          icon: AreaChartOutlined,
          position: "fixed",

     }, 
     
];
const LayoutCover = (props) => {
     const { children, logout } = props;
     const [collapsed, setCollapsed] = useState(false);

     const toggle = () => {
          collapsed ? setCollapsed(false) : setCollapsed(true);
     };

     const createIcon = (string) => {
          let component = React.createElement(string);
          return component;
     };
     return (
          <Layout>
               <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                         theme="dark"
                         mode="inline"
                         defaultSelectedKeys={["0"]}
                         className="sidebar"
                    >
                         <div className="logo mt-5" />
                         {_.map(MENU, (data, index) => {
                              return (
                                   <Menu.Item key={index}>
                                        <Link to={data.url}>
                                             {createIcon(data.icon)}
                                             <span>{data.name}</span>
                                        </Link>
                                   </Menu.Item>
                              );
                         })}
                         
                    </Menu>
               </Sider>
               <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
                              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                              {
                                   className: "trigger",
                                   onClick: toggle,
                              }
                         )}
                  
          <button type="button" class="btn btn-link btn-lg header-btn">You are the Admin of this website</button>
        
         </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: '85vh',
              maxHeight:'87vh'
            }}
          >
 {children}          </Content>
        </Layout>
      </Layout>
    );
  }


  
export default LayoutCover;