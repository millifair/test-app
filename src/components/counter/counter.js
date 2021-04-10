import React from 'react';
import {connect} from'react-redux';
import *as action from '../../action';


const Counter=({counter,inc,dec,rnd})=>{
    return(
        <div className="jumbotron color">
        <h1 >{counter}</h1>
        <button onClick ={dec}id='dec' className="btn btn-primary">-</button>
        <button onClick ={inc}id='inc' className="btn btn-primary">+</button>
        <button onClick ={rnd}id='rnd' className="btn btn-primary">RBB</button>
        </div>
    );
}
const mapStateTOProps=(state)=>{
    return{
        counter:state
    }
}

export default connect(mapStateTOProps,action)(Counter);