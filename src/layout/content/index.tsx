import React, { FC } from "react";
import { Space, Table, Tag } from "antd";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { UserType } from "../../types/types";
import UserModal from "../../components/Modal";
import { addUser } from "../../features/home/home.slice";

const { Column, ColumnGroup } = Table;

const Content: FC = () => {
  const datas = useAppSelector((state) => state.table.columns);
  const users = useAppSelector((state) => state.person.users);

  const dispatch = useAppDispatch();
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
        <Table style={{ padding: "30px" }} dataSource={users}>
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
