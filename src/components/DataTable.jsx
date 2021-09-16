import React from "react";
import { Menu } from "antd";

function DataTable(props) {
  const { id, code, name, address, date } = props.data;
  console.log(id);
  return (
    <>
      <Menu.Item key="1">
        <p className="code_data">{code}</p>
        <p className="name_data">{name}</p>
        <p className="address_data">{address}</p>
        <p className="date_data">{date}</p>
      </Menu.Item>
    </>
  );
}

export default DataTable;
