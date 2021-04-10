import React from 'react'
import TableCardItem from '../table-card-item'
const TableCardData=({itemData,ToBuy})=>{

return(
    <div>
    <div class="table">
  <caption>your choose element</caption>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">category</th>
      <th scope="col">price</th>
      <th scope="col">buy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{itemData.id}</th>
      <td>{itemData.title}</td>
      <td>{itemData.category}</td>
      <td>{itemData.price}</td>
      <td 
        
        onClick={()=>{
          if (itemData.id>0){
          ToBuy(itemData)}
        }}
        
      
        > click</td>
    </tr>
</tbody>
</div>
   </div>
)

}
export default TableCardData;