import './newc.css';

const new_transaction = props =>{

    let nme,cost;
    const addNme = event =>{
        event.preventDefault();
        console.log(nme);
        console.log(cost);
        const evnt= {type:nme,cost:cost};
        props.change(evnt);
    }

    const namechg =(event) =>{
        nme = event.target.value;
    }
    const costchg = event =>{
        cost = parseInt(event.target.value);
    }

    return(
        <div className="new">
            <h4>Add New Transaction</h4><hr/>
            <form>
                <h5>Text</h5>
                <input type="text" name="name" onChange={namechg}/>
                <h5>Amount</h5>
                <input type="number" name="cost" onChange={costchg}/>
                <button onClick={addNme}>Submit</button>
            </form>
        </div>
    );
}

export default new_transaction;