import './data.css'
import Val from './value'

const data = props =>{

    let hist = (
        <div>
            {props.data.map(p=>{return (
                <Val type={p.type} cost={p.cost} />
            )})}
        </div>
    )

    return(
        <div className="data">
            <h4>History</h4>
            <hr/>
            {hist}
        </div>
    );
}

export default data;