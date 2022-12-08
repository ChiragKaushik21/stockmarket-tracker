import React from 'react'

const StockTable = ({date, open, close, volume}) => {
  return (<>
    <tr>
        <td>{date}</td>
        <td>{open}</td>
        <td>{close}</td>
    </tr>
</>)    
}

export default StockTable
