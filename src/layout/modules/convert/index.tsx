import React, { useState } from 'react';
import { Layout, Space, Tooltip, Button, Modal, Input } from 'antd';
import { FaExchangeAlt } from "react-icons/fa";
import ChangeModal from './components/ChangeModal';
import proj4 from "proj4";

import "./styles/covertLayout.css";

const { Header, Footer, Sider, Content } = Layout;

const Convert = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputProjection, setInputProjection] = useState({ x: 36, y: 37 });
    const [outputProjection, setOutputProjection] = useState({ x: 36, y: 37 });

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    console.log(inputProjection.x, inputProjection.y)

    const transformCoordinate = () => {
         const firstProjection = "+proj=longlat +datum=WGS84 +no_defs +type=crs";
         const secondProjection = "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs +type=crs";
         //I'm not going to redefine those two in latter examples. , parseFloat(x.toFixed(number)) 
         const transformedCoord = proj4(firstProjection, secondProjection, [inputProjection.x, inputProjection.y]);
         setOutputProjection({x:transformedCoord[0], y:transformedCoord[1]});      
    }


    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 50,
        lineHeight: '64px',
        backgroundColor: '#7dbcea',
    };

    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
        padding: "20px"

    };

    return (
        <Layout>
            <Header className='header-style' style={headerStyle}>Header</Header>
            <Content style={contentStyle}>
                <div className='coord-content'>
                    <div className='input-coord-system'>
                        <h2>Input coordinate system</h2>
                        <div className='input-coord-system-input' >
                            <h3>EPSG:4623 WGS84</h3>
                            <Button onClick={showModal} style={{ width: "25%", paddingLeft: "0px", paddingRight: "0px", fontSize: "10px" }} type="primary">
                                Change
                            </Button>
                        </div>
                        <div className='input-area' >
                            <div className='input-coordinate-name'>
                                <h3>Lon:</h3>
                                <Input onChange={(e: any) => { setInputProjection({ ...inputProjection, x: parseFloat(e.target.value)}) }} className='coord-input-area' type={"number"} placeholder="Basic usage" />
                            </div>
                            <div className='input-coordinate-name'>
                                <h3>Lat:</h3>
                                <Input onChange={(e: any) => { setInputProjection({ ...inputProjection, y: parseFloat(e.target.value)}) }} className='coord-input-area' type={"number"} placeholder="Basic usage" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaExchangeAlt size={20} className='change-icon' style={{ cursor: "pointer" }} color='gray' />
                    </div>
                    <div className='input-coord-system'>
                        <h2>Output coordinate system</h2>
                        <div className='input-coord-system-input' >
                            <h3>EPSG:4623 WGS84</h3>
                            <Button onClick={showModal} style={{ width: "25%", paddingLeft: "0px", paddingRight: "0px", fontSize: "10px" }} type="primary">
                                Change
                            </Button>
                        </div>
                        <div className='input-area' >
                            <div className='input-coordinate-name'>
                                <h3>X:</h3>
                                <Input value={outputProjection.x} className='coord-input-area' type={"number"} placeholder="Basic usage" />
                            </div>
                            <div className='input-coordinate-name'>
                                <h3>Y:</h3>
                                <Input value={outputProjection.y} className='coord-input-area' type={"number"} placeholder="Basic usage" />
                            </div>
                        </div>
                    </div>
                    <ChangeModal handleCancel={handleCancel} handleOk={handleOk} showModal={showModal} isModalOpen={isModalOpen} />
                </div>
                <Button onClick={transformCoordinate} style={{ width: "200px" }} >Transform Coordinates</Button>
            </Content>
        </Layout>
    )
}

export default Convert
