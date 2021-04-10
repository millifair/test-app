import React , {  useState }from 'react';
import Up from './up'
import Down from './down'
const TableCardItem = (props) => {
const [fieldData,setfieldData] = useState('')
const Arrow=()=>{
  return(
    props.directionSort?<Down/>:<Up/>
  )
}
const fieldSortData=(field)=>{
  props.sortData(field)
  setfieldData(field)
}




  return (
    <div className="table">
      <thead>
        <tr>
          <th onClick={()=>{
            fieldSortData('id')}}>
            id {fieldData==='id'?<Arrow/>:null}
            
            </th>
          <th onClick={()=>{fieldSortData('title')}}>title {fieldData==='title'?<Arrow/>:null}</th>
          <th onClick={()=>{fieldSortData('category')}}>category {fieldData==='category'?<Arrow/>:null}</th>
          <th onClick={()=>{fieldSortData('price')}}>price {fieldData==='price'?<Arrow/>:null}</th>
        </tr>
      </thead>
      <tbody>

        {props.contactData.map(item => (

          <tr key={item.id} onClick={()=>props.detailRow(item)}>
            <td> {item.id}</td>
            <td> {item.title}</td>
            <td>  {item.category}</td>
            <td> {item.price}</td>
          </tr>
        
        ))}
   


      </tbody>
    </div>
  )
}
export default TableCardItem;