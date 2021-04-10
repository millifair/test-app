import React, { useEffect, useState } from 'react';
import TableCardItem from '../table-card-item';
import Spinner from '../spinner';
import TableCardData from '../table-card-data'
import TableFilter from '../table-filter';
import Hooks from '../hooks';
import TableButton from '../table-button'
import TableAdd from '../table-add'
import TableBasket from '../table-basket'
import TableForPages from '../table-for-pages'

function Table() {
const [Url,setUrl]=useState('http://localhost:3000/menu');
    const [isButtonClick,setisbuttonClick]=useState(false)
    const [directionSort, setdirectionSort] = useState(false);
    const [itemData, setitemData] = useState([]);
    const [itemData1, setitemData1] = useState([]);
    const [totalCountRow,settotalCountRow]=useState(0) 
    const [totalCountPage,settotalCountPage]=useState(0)  
    const [buyData,setbuyData]=useState([]);
    const [curpage,setcurpage]=useState(1);
  const [term,setterm]=useState('')
    const[activeForBordernext,setactiveForBordernext] =useState(null);
    const [activeForBorderprev,setactiveForBorderprev] =useState(null);
    const [count,setCount]=useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
    const [{contactData,isLoading,setContactData,setisLoading,isLoaded},getData]=Hooks({Url,isButtonClick})
let idofData=1;
let counter1=1;
const limitCountPage=5;
let Pages=[]
for (let i=1;i<=totalCountPage;i++){
Pages.push(i)
}


const currentPage=(pg)=>{
  setcurpage(pg)
if (pg===totalCountPage){
    setactiveForBordernext('disabled')
}
else{
    setactiveForBordernext(null)
}
if (pg===1){
    setactiveForBorderprev('disabled')
}
else{
    setactiveForBorderprev(null)
}


}

const SearchPost=()=>{
    if (!term){
           return contactData
       }
       return contactData.filter(
           el=>{
   
          return     el['title'].toLowerCase().includes(term.toLowerCase())
           }
       )
    
   }
const filtredData=SearchPost();
const lastBlockRow=curpage*limitCountPage;
const firstBlockRow=lastBlockRow-limitCountPage;
const currentBlockRows=filtredData.slice(firstBlockRow,lastBlockRow)


useEffect(()=>{
    if(!isLoaded){
        return
     }
     if (contactData.length<6){
        setactiveForBorderprev('disabled')
        setactiveForBordernext('disabled')
     }
     else{
        setactiveForBorderprev(null)
        setactiveForBordernext(null)   
     }
     if (curpage===1){
        setactiveForBorderprev('disabled')
     }
    settotalCountRow(contactData.length)
    const getTotalCountPage= Math.ceil(totalCountRow/limitCountPage);
settotalCountPage(getTotalCountPage)
  
if(totalCountRow<=5){
        setcurpage(1)
      }

},[isLoaded,settotalCountRow,contactData.length,totalCountRow]);









   const  ButtonChange=(urlBtn)=>{
setUrl(urlBtn)
setisbuttonClick(!isButtonClick)
   }


    const sortData=(field)=>{
        const copyData=contactData.concat();
        const data=copyData.sort(
            (a,b)=>{ 
                if (directionSort){
               return(  a[field]>b[field]?1:-1)
                }
                else{
               return(    a[field]<b[field]?1:-1)
                }
              
            }
        )
       setContactData(data)
       setdirectionSort(!directionSort)
    }
    const detailRow=(item)=>{

   setitemData(item)

      }

      const onAdd =(text)=>{
          const newItem={
            id:idofData++,
            title:text,
            category:'--',
            price:Math.floor(20+(Math.random()*70))
          }
          const data=contactData.concat();
          const newdata=data.map((item)=>
          item.id++
          )
          setContactData(newdata)
          const newArr = [newItem,...contactData];
          setContactData(newArr)
      }
const ToBuy=(items)=>{
    buyData.forEach(bd=>{
        if(items.id===bd.id){
const NewArr=[...count.slice(0,items.id), count[items.id]+1, ...count.slice(items.id+1)]

  setCount(NewArr)
counter1++
        }
    })
    if (counter1===1){
   const Arr=[...buyData,items];
   setbuyData(Arr)
    }
    
}
 const onNext=()=>{
     if(curpage<=totalCountPage-1){
        setactiveForBordernext('disabled')
        setactiveForBordernext(null)
        setactiveForBorderprev(null)
        setcurpage(curpage+1)
      
     }
     if(curpage>=totalCountPage-1){
        setactiveForBordernext('disabled')
     }
    
 }
 const onPrev=()=>{
     if(curpage>=2){
        setactiveForBorderprev(null)
        setactiveForBordernext(null)
       setcurpage(curpage-1)
        
     }
     if(curpage<=2){
        setactiveForBorderprev('disabled')
        
     }
    
}
const FindEl=(e)=>{
console.log(e)
setterm(e)
}








const DeleteElem=(el)=>{
    const NewArr5=buyData.concat()
const index=buyData.indexOf(el)
if (index>-1){
    NewArr5.splice(index,1)
    setbuyData(NewArr5)
}


console.log(index)
}
const ElemDec=(el)=>{
    buyData.forEach(bd=>{
        if (el.id===bd.id){
      if  (count[el.id]>1){
const NewArr=[...count.slice(0,el.id), count[el.id]-1, ...count.slice(el.id+1)];
  setCount(NewArr);
        }
        else{
            DeleteElem(el)
        }
    }
    })
}

const ElemInc=(el)=>{
    buyData.forEach(bd=>{
        if (el.id===bd.id){
const NewArr=[...count.slice(0,el.id), count[el.id]+1, ...count.slice(el.id+1)];

  setCount(NewArr);
        }
    })
}




    return (
        <div className="container">
        <TableFilter FindEl={FindEl} SearchPost={SearchPost} />
       <TableButton ButtonChange={ButtonChange}/>
                    
            {isLoading ? <Spinner /> : <TableCardItem 
                sortData={sortData} 
                directionSort={directionSort} 
                detailRow={detailRow} 
                contactData={currentBlockRows}
                />}
                <TableForPages curpage={curpage}   Pages={Pages} currentPage={currentPage} onNext={onNext} onPrev={onPrev} activeForBorderprev={activeForBorderprev} activeForBordernext={activeForBordernext}/>
            <TableAdd onAdd={onAdd}/>
           
          <TableCardData ToBuy={ToBuy} itemData={itemData}/>
<TableBasket buyData={buyData}  count={count} DeleteElem={DeleteElem} ElemInc={ElemInc} ElemDec={ElemDec} />

        </div>





    );



}
export default Table;