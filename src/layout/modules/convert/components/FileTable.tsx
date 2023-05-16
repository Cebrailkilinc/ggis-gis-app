import React, { useId, useRef, useState } from 'react'


const FileTable = ({ data }: any) => {

    const tableRef = useRef<HTMLTableElement>(null);
    const [cell, setCell] = useState({ row: null, col: null });
    const [currentCell, setCurrentCell] = useState({ row: null, column: null });

    const id = useId()

    function selectCells(columnIndex: any, rowIndex: any) {
        setCell({ row: rowIndex, col: columnIndex })
        const newArray = data.slice(columnIndex, rowIndex);
        console.log(columnIndex, rowIndex)
    }

    const [color, setColor] = useState('red');

    const handleCellClick = (event: any, row: any, column: any) => {        
        setCurrentCell({ row, column });
        console.log(currentCell)            
    };
    const handleCellEnter = (event: any, row: any, column: any) => {        
        setCurrentCell({ row, column });
    };
    const handleCellLeave = (event: any) => {        
        setCurrentCell({ row: null, column: null });
    };

    

        ///
    const handleMouseCellsOver = (columnIndex: any, rowIndex: any) => {
        console.log(columnIndex, rowIndex)
    };

    const handleMouseUp = () => {
        setColor('red');
    };


    return (
        <div>
            {cell.row},{cell.col}
            <table  >
                <tbody >
                    {
                        data.map((item: [], rowIndex: number) => (
                            <tr key={rowIndex} >
                                {
                                    item.map((ite: any, columnIndex: number) => (
                                        <td
                                            ref={tableRef}
                                            key={`${rowIndex}-${columnIndex}`}
                                            onClick={(event) => handleCellClick(event, rowIndex, columnIndex)}
                                            onMouseEnter={(event) => handleCellEnter(event, rowIndex, columnIndex)}
                                            onMouseLeave={(event) => handleCellLeave(event)}
                                            style={{
                                                backgroundColor:
                                                    currentCell.row === rowIndex && currentCell.column === columnIndex ? "lightblue" : "red",
                                            }}
                                        >
                                            {ite}
                                        </td>))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FileTable
