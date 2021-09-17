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
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 8C1.55228 8 2 8.44771 2 9C2 9.55229 1.55228 10 1 10C0.447715 10 0 9.55229 0 9C0 8.44771 0.447715 8 1 8ZM5 8C5.55228 8 6 8.44771 6 9C6 9.55229 5.55228 10 5 10C4.44772 10 4 9.55229 4 9C4 8.44771 4.44772 8 5 8ZM9 8C9.55229 8 10 8.44771 10 9C10 9.55229 9.55229 10 9 10C8.44771 10 8 9.55229 8 9C8 8.44771 8.44771 8 9 8ZM1 4C1.55228 4 2 4.44772 2 5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4ZM5 4C5.55228 4 6 4.44772 6 5C6 5.55228 5.55228 6 5 6C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4ZM9 4C9.55229 4 10 4.44772 10 5C10 5.55228 9.55229 6 9 6C8.44771 6 8 5.55228 8 5C8 4.44772 8.44771 4 9 4ZM1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0ZM5 0C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2C4.44772 2 4 1.55228 4 1C4 0.447715 4.44772 0 5 0ZM9 0C9.55229 0 10 0.447715 10 1C10 1.55228 9.55229 2 9 2C8.44771 2 8 1.55228 8 1C8 0.447715 8.44771 0 9 0Z"
                fill="#1A1A1A"
              />
            </svg>
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
              <svg
                className="icon_svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon-slider"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 13C18 13.551 17.551 14 17 14H13C12.685 14 12.389 14.148 12.2 14.4L10 17.333L7.8 14.4C7.611 14.148 7.315 14 7 14L3 14C2.449 14 2 13.551 2 13L2 3C2 2.449 2.449 2 3 2L17 2C17.551 2 18 2.449 18 3L18 13ZM17 0L3 0C1.346 0 0 1.346 0 3L0 13C0 14.654 1.346 16 3 16L6.5 16L9.2 19.6C9.389 19.852 9.685 20 10 20C10.315 20 10.611 19.852 10.8 19.6L13.5 16H17C18.654 16 20 14.654 20 13L20 3C20 1.346 18.654 0 17 0ZM15 5L5 5C4.448 5 4 5.448 4 6C4 6.552 4.448 7 5 7L15 7C15.552 7 16 6.552 16 6C16 5.448 15.552 5 15 5ZM5 9L15 9C15.552 9 16 9.448 16 10C16 10.552 15.552 11 15 11L5 11C4.448 11 4 10.552 4 10C4 9.448 4.448 9 5 9Z"
                  fill="#1A1A1A"
                />
              </svg>
              Trang chủ
            </NavLink>
            <div className="navigation-item">
              <svg
                className="icon_svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon-slider"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17 0C18.6569 0 20 1.34315 20 3L20 17C20 18.6569 18.6569 20 17 20L3 20C1.34315 20 0 18.6569 0 17L0 3C0 1.34315 1.34315 0 3 0L17 0ZM18 6L2 6L2 17C2 17.5523 2.44772 18 3 18L17 18C17.5523 18 18 17.5523 18 17L18 6ZM10.1168 15.9933L10.0001 16L9.916 15.996L9.79937 15.9798L9.68795 15.9503L9.57687 15.9063L9.47938 15.854L9.40492 15.8037L9.29298 15.7071L6.2929 12.7071C5.90237 12.3166 5.90237 11.6834 6.2929 11.2929C6.65339 10.9324 7.22064 10.9047 7.61294 11.2097L7.70715 11.2929L9 12.585L9.00008 9C9.00008 8.48716 9.38612 8.06449 9.88346 8.00673L10.0001 8C10.5524 8 11.0001 8.44771 11.0001 9L11 12.585L12.2931 11.2929C12.6535 10.9324 13.2208 10.9047 13.6131 11.2097L13.7073 11.2929C14.0678 11.6534 14.0955 12.2206 13.7905 12.6129L13.7073 12.7071L10.7072 15.7071L10.6217 15.7834L10.5519 15.8341L10.454 15.8913L10.3401 15.9407L10.2661 15.9642L10.1168 15.9933ZM17 2L3 2C2.44772 2 2 2.44772 2 3V4L18 4V3C18 2.44772 17.5523 2 17 2Z"
                  fill="#1A1A1A"
                />
              </svg>
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
              <svg
                className="icon_svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon-slider"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 0C10.6569 0 12 1.34315 12 3L12.0001 4.17067C12.3128 4.06014 12.6494 4 13 4L17 4C18.6569 4 20 5.34315 20 7L20 17C20 18.6569 18.6569 20 17 20L3 20C1.34315 20 0 18.6569 0 17L0 3C0 1.34315 1.34315 0 3 0L9 0ZM9 2L3 2C2.44772 2 2 2.44772 2 3L2 17C2 17.5523 2.44772 18 3 18L10 18L10 3C10 2.44772 9.55229 2 9 2ZM17 6L13 6C12.4477 6 12 6.44772 12 7L12 18H17C17.5523 18 18 17.5523 18 17L18 7C18 6.44772 17.5523 6 17 6ZM7 12C7.55228 12 8 12.4477 8 13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13C4 12.4477 4.44772 12 5 12H7ZM16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14H14C13.4477 14 13 13.5523 13 13C13 12.4477 13.4477 12 14 12H16ZM7 8C7.55228 8 8 8.44771 8 9C8 9.55229 7.55228 10 7 10H5C4.44772 10 4 9.55229 4 9C4 8.44771 4.44772 8 5 8L7 8ZM16 8C16.5523 8 17 8.44771 17 9C17 9.55229 16.5523 10 16 10H14C13.4477 10 13 9.55229 13 9C13 8.44771 13.4477 8 14 8H16ZM7 4C7.55228 4 8 4.44772 8 5C8 5.55228 7.55228 6 7 6L5 6C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4L7 4Z"
                  fill="#1A1A1A"
                />
              </svg>
              Cấu hình
            </NavLink>
            <NavLink
              to="/account"
              className="navigation-item title-normal"
              activeClassName="active"
            >
              <svg
                className="icon_svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon-slider"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 0C12.5977 0 13.9037 1.24892 13.9949 2.82373L14 3L14 6L17 6C18.5977 6 19.9037 7.24892 19.9949 8.82373L20 9V17C20 18.5977 18.7511 19.9037 17.1763 19.9949L17 20H9C7.40232 20 6.09634 18.7511 6.00509 17.1763L6 17L6 14L3 14C1.40232 14 0.0963391 12.7511 0.00509269 11.1763L0 11L0 3C0 1.40232 1.24892 0.0963391 2.82373 0.00509269L3 0L11 0ZM17 8L14 8L14 11C14 12.5977 12.7511 13.9037 11.1763 13.9949L11 14L8 14V17C8 17.5128 8.38604 17.9355 8.88338 17.9933L9 18H17C17.5128 18 17.9355 17.614 17.9933 17.1166L18 17V9C18 8.48716 17.614 8.06449 17.1166 8.00673L17 8ZM11 2L3 2C2.48716 2 2.06449 2.38604 2.00673 2.88338L2 3L2 11C2 11.5128 2.38604 11.9355 2.88338 11.9933L3 12L6 12L6 9C6 7.40232 7.24892 6.09634 8.82373 6.00509L9 6L12 6L12 3C12 2.48716 11.614 2.06449 11.1166 2.00673L11 2Z"
                  fill="#1A1A1A"
                />
              </svg>
              Tài khoản
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
