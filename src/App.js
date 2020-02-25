import React, { Component, useState, useEffect} from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

const App = props => {



  return (
    <div className="demo-big-content">
      <Layout backgroundColor="#CFB87C">
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Ritchie Maes
            </Link>
          }
          scroll
        >
          <Navigation>
            {/* <Link to="/resume">Resume</Link> */}
            {/* <Link to="/aboutme">About Me</Link> */}
            {/* <Link to="/projects">Projects</Link> */}
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer
          className="header-color"
          style={{ backgroundColor: "#CFB87C", color: "#3c3c3b" }}
          title={
            <Link style={{ textDecoration: "none" }} to="/">
              Diëtist Ritchie Maes
            </Link>
          }
        >
          <Navigation>
            {/* <Link to="/resume">Resume</Link> */}
            {/* <Link to="/aboutme">About Me</Link> */}
            {/* <Link to="/projects">Projects</Link> */}
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
};

export default App;
