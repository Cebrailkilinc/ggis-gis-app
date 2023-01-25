/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { HolderOutlined } from "@ant-design/icons";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

const Field: FC = () => {
  const datas = useAppSelector((state) => state.table.columns);

  const [selectedFields, setSelectedFields] = useState(datas);

  const onDragEnd = (result: DropResult) => {
    const { source, destination }: { destination: any; source: any } = result;
    const items = [...datas];
    const [newDatas] = items.splice(source.index, 1);
    items.splice(destination.index, 0, newDatas);
    console.log(items);
    setSelectedFields(items);
  };

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
