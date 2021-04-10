import React from 'react'
const TableBasket=({buyData,count,DeleteElem,ElemDec,ElemInc})=>{

return(
    <div className="table">
<h1>Basket</h1>
{buyData.map(buy=>(

    <tr key={buy.id} >
    <td>  {buy.id} </td>
    <td> {buy.title}</td>
    <td>  {buy.category}</td>
    <td> {buy.price}</td>
    <td onClick={()=>ElemDec(buy)}> - </td>
    <td> {count[buy.id]} </td>
    <td onClick={()=>ElemInc(buy)}> + </td>
    <td onClick={()=>DeleteElem(buy)}> del </td>
  </tr>


))}

    




    
    
    
    </div>
)


}
export default TableBasket