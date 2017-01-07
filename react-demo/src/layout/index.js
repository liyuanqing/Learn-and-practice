'use strict';

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Menu, Dropdown, Icon, Badge, Row, Col} from 'antd';
import './index.less';
import Header from '../components/header/';
var selected = '1';
class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.location.pathname) {
            case '/':
            case '/secondMenuOne':
            case '/secondMenuTwo':
                selected = '1';
                break;
            case '/secondMenuThree':
                selected = '2';
                break;
        }
        return (
            <div className="main">
                <Header/>
                <div className="main-wrapper">
                    <Row>
                        <Col lg={3} md={5} sm={7} xs={24} className="left-menu">
                            <Menu mode="inline"
                                  theme="light"
                                  defaultOpenKeys={['memberManager', 'systemSettings']}
                                  selectedKeys={[selected]}>
                                <Menu.SubMenu key="memberManager" title={<span><Icon type="home"/><span>一级菜单</span></span>}>
                                    <Menu.Item key="1">
                                        <Link to="/secondMenuOne">二级菜单</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2">
                                        <Link to="/secondMenuTwo">二级菜单</Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
                                <Menu.SubMenu key="systemSettings" title={<span><Icon type="line-chart"/><span>一级菜单</span></span>}>
                                    <Menu.Item key="3">
                                        <Link to="/secondMenuThree">二级菜单</Link>
                                    </Menu.Item>
                                </Menu.SubMenu>
                            </Menu>
                        </Col>
                        <Col lg={21} md={19} sm={17} xs={24} className="right-content">
                            <div className="right-content-container">
                                {this.props.children}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Layout;
