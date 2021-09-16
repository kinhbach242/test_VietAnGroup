import React from "react";
import Logo from "../assets/svg/Home";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
const { SubMenu } = Menu;

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="header_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="header_text">
            <p className="header_text-title title-large">Monitoring</p>
            <p className="sub-title">Giám sát trạm quan trắc</p>
          </div>
          <div className="header_icon">
            <i className="icon uil uil-apps"></i>
          </div>
        </div>
        <div className="sidebar__navigation">
          <div className="sidebar_navigation">
            <NavLink
              to="/"
              className="navigation-item title-normal"
              activeClassName="active"
              exact
            >
              <i className="uil uil-estate" />
              Trang chủ
            </NavLink>
            <div className="navigation-item">
              <i className="uil uil-folder-download" />
              <Menu
                style={{ width: 230 }}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
              >
                <SubMenu key="sub4" icon="" title="Khai thác dữ liệu">
                  <Menu.Item key="9">Giám sát trực tuyến</Menu.Item>
                  <Menu.Item key="10">Bản đồ</Menu.Item>
                  <Menu.Item key="11">Camera</Menu.Item>
                  <Menu.Item key="12">Truy cứu dữ liệu</Menu.Item>
                  <Menu.Item key="13">Dữ liệu trung bình</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <NavLink
              to="/config"
              className="navigation-item title-normal"
              activeClassName="active"
              exact
            >
              <i className="uil uil-cog" />
              Cấu hình
            </NavLink>
            <NavLink
              to="/account"
              className="navigation-item title-normal"
              activeClassName="active"
            >
              <i className="uil uil-voicemail-rectangle" />
              Tài khoản
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
