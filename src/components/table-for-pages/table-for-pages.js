import React from 'react';
import './table-for-pages.css'
const TableForPages=({Pages,currentPage,onNext,onPrev,activeForBorderprev,activeForBordernext,curpageactive,curpage})=>{


return(
    <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className={`page-item ${activeForBorderprev}`}>
        <a className="page-link" href="#" aria-label="Previous" onClick={()=>(onPrev())}>
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      {Pages.map(p=>{
        return(
          <li className={curpage===p?`page-item active`:`page-item`} key={p}>
          <a class="page-link " href="#" onClick={()=>{currentPage(p)}}>
          {p}
          </a>
          </li>
        )


      })}
      <li className={`page-item ${activeForBordernext}`}>
        <a className="page-link" href="#" aria-label="Next" onClick={()=>{onNext()}}>
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>




)


}
export default TableForPages