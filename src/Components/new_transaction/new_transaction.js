import './newc.css';
import React, { useState,useRef } from 'react';

const New_transaction = props =>{

    const nme  = useRef();
    const cost = useRef();
    const addNme = event =>{
        event.preventDefault();
        const name = nme.current.value;
        const cst = parseInt(cost.current.value);
        const evnt= {type:name,cost:cst};
        if(name!=""||cst!="")props.change(evnt);
        nme.current.value="";
        cost.current.value="";
    }

    return(
        <div className="new">
            <h4>Add New Transaction</h4><hr/>
            <form onSubmit={addNme}>
                <h5>Text</h5>
                <input type="text" name="name" ref={nme}/>
                <h5>Amount</h5>
                <input type="number" name="cost" ref={cost}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default New_transaction;