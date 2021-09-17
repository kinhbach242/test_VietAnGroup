import React from "react";
import { Modal, Tabs, Input, Form, Button, Select } from "antd";
const { TabPane } = Tabs;
const { Option } = Select;

function ModalBox(props) {
  const { isModalVisible, setIsModalVisible, data } = props;
  const [form] = Form.useForm();
  form.resetFields();
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        className="modal_box"
        title={data.name}
        width={750}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Thông tin" key="1">
            <div className="form_modal">
              <form action="" className="form_content">
                <div className="form_content_left">
                  <div className="form_code">
                    <p className="label_form title-large">
                      Mã trạm <span className="note">(*)</span>
                    </p>
                    <Input
                      size="large"
                      placeholder="Mã trạm của bạn"
                      value={data.code}
                    />
                    <p className="sub-title">Đây là mã không thể đổi</p>
                  </div>
                  <div className="form_longitude">
                    <p className="label_form title-large">
                      Kinh độ <span className="note">(*)</span>
                    </p>
                    <Input size="large" placeholder="Mã trạm của bạn" />
                    <p className="sub-title">Đây là mã không thể đổi</p>
                  </div>
                  <div className="form_address">
                    <p className="label_form title-large">
                      Địa chỉ<span className="note">(*)</span>
                    </p>
                    <Input
                      size="large"
                      placeholder="Địa chỉ của bạn"
                      value={data.address}
                    />
                    <p className="sub-title">Đây là mã không thể đổi</p>
                  </div>
                </div>
                <div className="form_content_right">
                  <div className="form_name">
                    <p className="label_form title-large">
                      Tên trạm <span className="note">(*)</span>
                    </p>
                    <Input size="large" placeholder="Tên trạm quan trắc" />
                    <p className="sub-title">Đặt tên để dễ tìm kiếm</p>
                  </div>
                  <div className="form_latitude">
                    <p className="label_form title-large">
                      Vĩ độ <span className="note">(*)</span>
                    </p>
                    <Input size="large" placeholder="Tên trạm quan trắc" />
                    <p className="sub-title">Đặt tên để dễ tìm kiếm</p>
                  </div>
                  <div className="form_type">
                    <p className="label_form title-large">Loại trạm</p>
                    <Select
                      labelInValue
                      style={{ width: "100%" }}
                      defaultValue={{ value: "atmosphere" }}
                    >
                      <Option value="atmosphere">Không khí</Option>
                      <Option value="water">Nước</Option>
                      <Option value="soil">Đất</Option>
                    </Select>
                    ,
                  </div>
                </div>
              </form>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </div>
          </TabPane>
          <TabPane tab="Thông số" key="2">
            Thông số
          </TabPane>
          <TabPane tab="Thông báo" key="3">
            Thông báo
          </TabPane>
          <TabPane tab="Lấy mẫu" key="4">
            Lấy mẫu
          </TabPane>
          <TabPane tab="Camera" key="5">
            Camera
          </TabPane>
        </Tabs>
      </Modal>
    </>
  );
}

export default ModalBox;
