import React, {useState} from 'react';
import "./geocoder.css";
import { Input } from 'antd';
import { Divider, List, Typography } from 'antd';


const { Search } = Input;

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
];

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const Geocoder = () => {
  <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    ></div>
  return (
    <div className="geocoder-container" >
      <Search placeholder="Adress" enterButton />
      <div className='geocoder-container-table'>
        <List          
          header={<div className='list-item-header'>Header</div>}          
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}       
        />
      </div>
    </div>
  )
}

export default Geocoder