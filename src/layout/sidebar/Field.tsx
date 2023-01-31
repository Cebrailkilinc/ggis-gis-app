/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { HolderOutlined } from "@ant-design/icons";

const Field: FC = () => {
  const datas = useAppSelector((state) => state.table.columns);
  console.log(datas);

  const [selectedFields, setSelectedFields] = useState(datas);

  return (
    <div className="menu-item-field">
      <div>
        <h3>Selected Fields</h3>
        <h5>Drop and drop fields to re order</h5>
      </div>

      {/* {datas.map((item: any, i) => (
        <div key={i} className="table-drag-item">
          <div className="drag-item-left">
            <HolderOutlined />
            <div>{item}</div>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Field;
