import React from 'react'
const TableButton=({ButtonChange})=>{
    const baseSmall = 'http://localhost:3000/menu';
    const baseBig= 'http://localhost:3000/cards';
    return(
        <div>
        <button
        onClick={()=>{ButtonChange(baseSmall)}}
                    className="btn btn-outline-secondary">
                    small data
                    </button>
                    <button
                    onClick={()=>{ButtonChange(baseBig)}}
                                className="btn btn-outline-secondary">
                                full data
                                </button>
                                </div>

    )
}
export default TableButton;