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
        title={data.name}
        width={600}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="Thông tin" key="1">
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "20px",
                justifyContent: "space-between",
              }}
            >
              <Form
                form={form}
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Form.Item
                  label="Mã trạm"
                  name="code"
                  rules={[
                    { required: true, message: "Vui lòng nhập mã trạm!" },
                  ]}
                >
                  <Input defaultValue={data.code} placeholder="Nhập mã trạm" />
                </Form.Item>

                <Form.Item
                  label="Kinh độ"
                  name="longitude"
                  rules={[
                    { required: true, message: "Vui lòng nhập mã kinh độ!" },
                  ]}
                >
                  <Input placeholder="Nhập kinh độ" />
                </Form.Item>
                <Form.Item
                  label="Địa chỉ"
                  name="address"
                  rules={[
                    { required: true, message: "Vui lòng nhập địa chỉ!" },
                  ]}
                >
                  <Input
                    defaultValue={data.address}
                    placeholder="Nhập địa chỉ"
                  />
                </Form.Item>
              </Form>
              <Form
                form={form}
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
                autoComplete="off"
              >
                <Form.Item
                  label="Tên trạm"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input defaultValue={data.name} placeholder="Nhập tên trạm" />
                </Form.Item>

                <Form.Item label="Loại trạm" name="type">
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Chọn loại trạm"
                  >
                    <Option value="1">Không khí</Option>
                    <Option value="2">Nước</Option>
                    <Option value="3">Đất</Option>
                  </Select>
                </Form.Item>
              </Form>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
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
