import React, { useState, FC } from "react";
import { TreeSelect } from "antd";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addField } from "../../features/person/table.slice";

const { SHOW_PARENT } = TreeSelect;

const treeData = [
  {
    value: "First Name",
    title: "First Name",
  },
  {
    value: "Last Name",
    title: "Last Name",
  },
  {
    value: "Age",
    title: "Age",
  },
  {
    value: "Address",
    title: "Address",
  },
];

const Sidebar: FC = () => {
  const [value, setValue] = useState();

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.table.columns);

  const onChange = (newValue: any): void => {
    console.log(newValue);
    dispatch(addField(newValue));
    console.log(state);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>Field Selection</h1>
      <h4 style={{ color: "gray" }}>
        Choose what fields you want displayed on the table
      </h4>
      <TreeSelect
        showSearch
        style={{ width: "100%" }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
      />
    </div>
  );
};

export default Sidebar;
