import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Button, Menu } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import ModalBox from "../components/Modal";
const { SubMenu } = Menu;
const datas = [
  {
    id: 1,
    key: "1",
    code: "HN_Air_KHI",
    name: "Hà Nội Capital",
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
              <div className="table_header">
                <span className="th_title">Mã trạm</span>
                <span className="th_title">Tên trạm</span>
                <span className="th_title">Địa chỉ</span>
                <span className="th_title">Ngày hoạt động</span>
              </div>
              <div className="table_data">
                <Menu
                  style={{ width: 256 }}
                  defaultOpenKeys={["sub1"]}
                  mode="inline"
                >
                  <SubMenu key="sub1" title="Trạm không khí (10)">
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
                  <SubMenu key="sub2" title="Trạm nước mặt (20)">
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
        <ModalBox
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
          data={dataModal}
        />
      </div>
    </>
  );
}

export default Config;
