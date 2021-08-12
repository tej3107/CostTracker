import './Balance.css'

const balance = props =>{
    let bal=0,inc=0,exp=0;
    // console.log(props.data);
    props.data.forEach(element => {
        bal+=element.cost;
        if(element.cost>0)inc+=element.cost;
        else exp+=element.cost;
    });
    exp = Math.abs(exp);
    return(
        <div>
            <h3>Expense Tracker</h3>
            <h5>YOUR BALANCE</h5>
            <h2>${bal}.00</h2>
            <div>
                <div className="income">
                    Income
                    <h3>${inc}.00</h3>
                </div>
                <div className="expense">
                    Expense
                    <h3>${exp}.00</h3>
                </div>
            </div>
        </div>
    );
}

export default balance;