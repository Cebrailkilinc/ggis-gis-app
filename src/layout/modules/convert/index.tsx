import React, { useState } from 'react';
import { Layout, Space, Tooltip, Button, Modal, Input } from 'antd';
import { FaExchangeAlt } from "react-icons/fa";
import ChangeModal from './components/ChangeModal';
import proj4 from "proj4";
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { modelControl } from "../../../features/convert/convert.slice";
import { getInputProjectionInfo, getOutputProjectionInfo } from "../../../features/convert/convert.slice";
import readExcelFile from './service/readExcel';
import "./styles/covertLayout.css";
import FileTable from './components/FileTable';

const { Header, Footer, Sider, Content } = Layout;

const Convert = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputProjection, setInputProjection] = useState({ x: 36, y: 37 });
    const [outputProjection, setOutputProjection] = useState({ x: 0, y: 0 });
    const { inputProjectionInfo, outputProjectionInfo } = useAppSelector(state => state.convert);

    const dispatch = useAppDispatch();

    const showModalInput = () => {
        setIsModalOpen(true);
        dispatch(modelControl(true))
    };
    const showModalOutput = () => {
        setIsModalOpen(true);
        dispatch(modelControl(false))
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const transformCoordinate = () => {
        const firstProjection = inputProjectionInfo.swapperCode;
        const secondProjection = outputProjectionInfo.swapperCode;
        //I'm not going to redefine those two in latter examples. , parseFloat(x.toFixed(number)) 
        const transformedCoord = proj4(firstProjection, secondProjection, [inputProjection.x, inputProjection.y]);
        setOutputProjection({ x: transformedCoord[0], y: transformedCoord[1] });
    }

    const handleChangeProjectionSystems = () => {
        dispatch(getInputProjectionInfo(outputProjectionInfo))
        dispatch(getOutputProjectionInfo(inputProjectionInfo))
        console.log("object")
    }

    const [data, setData] = useState<any[]>([[]]);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = e.target.files?.[0];
            if (!file) return;
            const result = await readExcelFile(file);
            setData(result);
        } catch (error) {
            console.log(error)
        }

    };

    try {
        data.length !== undefined ? data[0].map((item: string) => console.log(item)) : null;
    } catch (error) {
        console.log(error)
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
                            <h3>{inputProjectionInfo.name}</h3>
                            <Button onClick={showModalInput} style={{ width: "25%", paddingLeft: "0px", paddingRight: "0px", fontSize: "10px" }} type="primary">
                                Change
                            </Button>
                        </div>
                        <div className='input-area' >
                            <div className='input-coordinate-name'>
                                <h3>{inputProjectionInfo.epsgCode == "4326" ? "Lon" : "X"}:</h3>
                                <Input onChange={(e: any) => { setInputProjection({ ...inputProjection, x: parseFloat(e.target.value) }) }} className='coord-input-area' type={"number"} placeholder="Basic usage" />
                            </div>
                            <div className='input-coordinate-name'>
                                <h3>{inputProjectionInfo.epsgCode === "4326" ? "Lat" : "Y"}:</h3>
                                <Input onChange={(e: any) => { setInputProjection({ ...inputProjection, y: parseFloat(e.target.value) }) }} className='coord-input-area' type={"number"} placeholder="Basic usage" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <FaExchangeAlt onClick={handleChangeProjectionSystems} size={20} className='change-icon' style={{ cursor: "pointer" }} color='gray' />
                    </div>
                    <div className='input-coord-system'>
                        <h2>Output coordinate system</h2>
                        <div className='input-coord-system-input' >
                            <h3>{outputProjectionInfo.name}</h3>
                            <Button onClick={showModalOutput} style={{ width: "25%", paddingLeft: "0px", paddingRight: "0px", fontSize: "10px" }} type="primary">
                                Change
                            </Button>
                        </div>
                        <div className='input-area' >
                            <div className='input-coordinate-name'>
                                <h3>{outputProjectionInfo.epsgCode == "4326" ? "Lon" : "X"}:</h3>
                                <Input value={outputProjection.x} className='coord-input-area' placeholder="Basic usage" />
                            </div>
                            <div className='input-coordinate-name'>
                                <h3>{outputProjectionInfo.epsgCode == "4326" ? "Lat" : "Y"}:</h3>
                                <Input value={outputProjection.y} className='coord-input-area' placeholder="Basic usage" />
                            </div>
                        </div>
                    </div>
                    <ChangeModal handleCancel={handleCancel} handleOk={handleOk} isModalOpen={isModalOpen} />
                </div>
                <div>
                    <input onChange={handleFileChange} type={"file"} />
                    <Button onClick={transformCoordinate} style={{ width: "200px" }} >Transform Coordinates</Button>
                </div>
                <div className='file-table-container'>
                    <FileTable data={data} />
                </div>

            </Content>
        </Layout>
    )
}

export default Convert
