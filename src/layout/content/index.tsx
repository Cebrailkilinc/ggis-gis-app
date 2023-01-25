import React, { FC } from "react";
import { Space, Table, Tag } from "antd";
import { useAppSelector } from "../../app/hooks";
import { UserType } from "../../types/types";
import UserModal from "../../components/Modal";

const { Column, ColumnGroup } = Table;

const data: UserType[] = [
  {
    key: "1",
    firstName: "John",
    lastName: "Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Content: FC = () => {
  const datas = useAppSelector((state) => state.table.columns);
  console.log(datas);

  const columns = datas.map((item) => {
    return {
      title: item,
      dataIndex:
        item.split(" ").join("").charAt(0).toLowerCase() +
        item.split(" ").join("").slice(1),
      key: item,
    };
  });

  console.log(columns);

  return (
    <>
      {columns.length !== 0 ? (
        <Table style={{ padding: "30px" }} dataSource={data}>
          {columns.map((item: any, i) => {
            return (
              <Column
                title={item.title}
                dataIndex={item.dataIndex}
                key={item.dataIndex}
              />
            );
          })}
        </Table>
      ) : null}
    </>
  );
};

export default Content;
