import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Button, Menu } from "antd";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import Modal2 from "../components/Modal2";
const { SubMenu } = Menu;
const datas = [
  {
    id: 1,
    key: "1",
    code: "HN_Air_KHI",
    name: "Ha Noi Capital",
    address:
      "556 Nguyen Gia Cu, Gia Thuy Ward, Long Bien District, Ha Noi Capital",
    date: "20/5/2021",
  },
  {
    id: 2,
    key: "2",
    code: "DN_Air_KHI",
    name: "Da Nang City",
    address: "Thach Quang Ward, Hai Chau District, Da Nang City",
    date: "20/5/2021",
  },
  {
    id: 3,
    key: "3",
    code: "HCM_Air_KHI",
    name: "Ho Chi Minh City",
    address: "Ben Nghe Ward,  District 1, Ho Chi Minh City",
    date: "20/5/2021",
  },
];
const datas2 = [
  {
    id: 4,
    key: "4",
    code: "HN_Air_KHI",
    name: "Hà Nội Capital",
    address:
      "556 Nguyen Gia Cu, Gia Thuy Ward, Long Bien District, Ha Noi Capital",
    date: "20/5/2021",
  },
  {
    id: 5,
    key: "5",
    code: "HN_Air_KHI",
    name: "Hà Nội Capital",
    address:
      "556 Nguyen Gia Cu, Gia Thuy Ward, Long Bien District, Ha Noi Capital",
    date: "20/5/2021",
  },
  {
    id: 6,
    key: "6",
    code: "HN_Air_KHI",
    name: "Hà Nội Capital",
    address:
      "556 Nguyen Gia Cu, Gia Thuy Ward, Long Bien District, Ha Noi Capital",
    date: "20/5/2021",
  },
];

function Config() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const showModal = (data) => {
    setIsModalVisible(true);
    setDataModal(data);
  };
  return (
    <>
      <div className="config container">
        <Sidebar />
        <div className="config__center">
          <div className="config__center_nav">
            <p className="nav_title title-big">Cấu hình</p>
            <div className="nav_connect">
              <p className="connect title">Kết nối</p>
              <div className="nav_items">
                <NavLink
                  to="/config"
                  activeClassName="active"
                  exact
                  className="config_link"
                >
                  Trạm quan trắc
                </NavLink>
                <NavLink
                  to="/"
                  activeClassName="active"
                  exact
                  className="config_link"
                >
                  Chi tiêu quan trắc
                </NavLink>
                <NavLink
                  to="/"
                  activeClassName="active"
                  exact
                  className="config_link"
                >
                  Loại trạm quan trắc
                </NavLink>
              </div>
            </div>
            <div className="nav_calc">
              <p className="calc title">Tính toán</p>
              <div className="nav_items">
                <NavLink
                  to="/"
                  activeClassName="active"
                  exact
                  className="config_link"
                >
                  Quy chuẩn Việt Nam
                </NavLink>
                <NavLink
                  to="/"
                  activeClassName="active"
                  exact
                  className="config_link"
                >
                  Tính toán AQI
                </NavLink>
              </div>
            </div>
          </div>
          <div className="config__center_content">
            <div className="content_header ">
              <p className="content_header-title title-big">Trạm quan trắc</p>
              <div className="content_header-button">
                <Button type="primary" icon={<PlusOutlined />}>
                  Tạo trạm
                </Button>
              </div>
            </div>
            <div className="content_table">
              <div className="table">
                <div className="table_svg_header">
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.70711 7.29289L7.70711 10.2929C8.09763 10.6834 8.09763 11.3166 7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071L4 9.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L3.29289 7.29289C3.68342 6.90237 4.31658 6.90237 4.70711 7.29289ZM0.292893 0.292893C0.653377 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L4 2.58579L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893C8.06759 0.653377 8.09532 1.22061 7.7903 1.6129L7.70711 1.70711L4.70711 4.70711C4.34662 5.06759 3.77939 5.09532 3.3871 4.7903L3.29289 4.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
                      fill="#2C5DE5"
                    />
                  </svg>
                </div>
                <div className="table_header">
                  <span className="th_title">Mã trạm</span>
                  <span className="th_title">Tên trạm</span>
                  <span className="th_title">Địa chỉ</span>
                  <span className="th_title">Ngày hoạt động</span>
                </div>
              </div>
              <div className="table_data">
                <Menu
                  style={{ width: 256 }}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                >
                  <SubMenu
                    icon={<DownOutlined />}
                    key="sub1"
                    title="Trạm không khí (10)"
                  >
                    {datas.map((data) => {
                      return (
                        <Menu.Item
                          key={data.id}
                          onClick={() => {
                            showModal(data);
                          }}
                        >
                          <p className="code_data">{data.code}</p>
                          <p className="name_data">{data.name}</p>
                          <p className="address_data">{data.address}</p>
                          <p className="date_data">{data.date}</p>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<DownOutlined />}
                    title="Trạm nước mặt (20)"
                  >
                    {datas2.map((data) => {
                      return (
                        <Menu.Item
                          key={data.id}
                          onClick={() => {
                            showModal(data);
                          }}
                        >
                          <p className="code_data">{data.code}</p>
                          <p className="name_data">{data.name}</p>
                          <p className="address_data">{data.address}</p>
                          <p className="date_data">{data.date}</p>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                </Menu>
              </div>
            </div>
          </div>
        </div>
        <Modal2
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          data={dataModal}
        />
      </div>
    </>
  );
}

export default Config;
