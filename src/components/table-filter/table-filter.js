import React,{useState} from 'react';
const TableFilter=({FindEl,SearchPost})=>{
const [Value,setValue]=useState('');
const FindElement=(e)=>{
 setValue(e.target.value)
FindEl(e.target.value);
SearchPost()
}

return(
    <div className="container">
    
    <input class="form-control form-control-lg" value={Value}  onChange={FindElement} onClick={SearchPost} type="text" placeholder="search element"></input>
           
    
  
    
    
    
    </div>
)

}
export default TableFilter;