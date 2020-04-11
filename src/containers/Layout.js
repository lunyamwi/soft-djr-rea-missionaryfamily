import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Card, Col, Row } from 'antd';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { Carousel } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">


        <Content style={{ padding: "0 50px" }}>
          <Header style={{ backgroundColor: "white" }}>

            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              style={{ lineHeight: "64px" }}
            >

              <Menu.Item key="1" onClick={this.props.logout}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/about/">About</Link>
              </Menu.Item>
              <Menu.Item key="2" onClick={this.props.logout}>
                <Link to="/assignments/">Study Guides</Link>
              </Menu.Item>
              <Menu.Item key="2">
                {this.props.token !== null ? (
                  <Link to={`/profile/${this.props.userId}`}>Profile</Link>
                ) : null}
                {this.props.token !== null && this.props.is_teacher ? (
                  <Link to="/create">Create</Link>
                ) : null}
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/mpesa/">Support The Ministry</Link>
              </Menu.Item>
              {this.props.isAuthenticated ? (
                <Menu.Item key="4" onClick={this.props.logout}>
                  Logout
                </Menu.Item>
              ) : (
                  <Menu.Item key="4">
                    <Link to="/login">Login</Link>
                  </Menu.Item>
                )}
            </Menu>

          </Header>

          {/* <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Mission" key="1">
              Misson is our King.
            </TabPane>
            <TabPane tab="Vision" key="2">
              Preparing the world for the soon coming of the Saviour.
            </TabPane>
            <TabPane tab="Calling" key="3">
              “Be ye also ready: for in such an hour as ye think not the Son of man cometh” (Matthew 24:44)
              Long have we waited for our Saviour's return. But nonetheless sure is the promise. Soon we shall be in our promised home.
              Testimonies for the Church 8:252-254.
            </TabPane>
          </Tabs> */}
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            {this.props.token !== null ? (
              <Breadcrumb.Item>
                <Link to={`/profile/${this.props.userId}`}>Profile</Link>
              </Breadcrumb.Item>
            ) : null}
            {this.props.token !== null && this.props.is_teacher ? (
              <Breadcrumb.Item>
                <Link to="/create">Create</Link>
              </Breadcrumb.Item>
            ) : null}
            <Breadcrumb.Item>
              <Link to="/assignments/">Study Guides.</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/mpesa/">Support The Ministry.</Link>
            </Breadcrumb.Item> */}

          {/* <Breadcrumb.Item>
              <Link to="/images/">Images</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/books/">Books</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/music/">Music</Link>
            </Breadcrumb.Item> */}
          {/* <Breadcrumb.Item>
              <Link to="/sermons/">Sermons</Link>
            </Breadcrumb.Item> */}
          {/* </Breadcrumb> */}

          <div style={{ background: "#fff", padding: 24, alignment: "center", minHeight: 100 }}>

            {this.props.children}

          </div>
          <div style={{
            background: "black",
            height: "100px",
            textAlign: "center",
            color: "white",
            fontFamily: "Comic Neue cursive",
            fontSize: "24px",
            position: "relative",
            bottom: "0",
            width: "100%"
          }}>
            <p>A website calculated to save the world ©2020 Created by Missionary Family</p>
            <span style={{ marginRight: "5px" }}><a href="https://www.youtube.com/watch?v=NjLoMtwDppk"> <Icon type="youtube" /></a></span>
            <span style={{ marginRight: "5px" }}><a href="https://www.youtube.com/watch?v=NjLoMtwDppk"> <Icon type="facebook" /></a></span>
            <span style={{ marginRight: "5px" }}><a href="https://www.youtube.com/watch?v=NjLoMtwDppk"> <Icon type="twitter" /></a></span>
          </div>
        </Content>

      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.auth.userId,
    token: state.auth.token,
    is_teacher: state.auth.is_teacher
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
