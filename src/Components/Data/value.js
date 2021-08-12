import './val.css'

const val = props => {
    return (
        <div className="val">
            <div className="type">{props.type}</div>
            <div className="type2">
                {props.cost}
            </div>
            {/* <div className="type3">.</div> */}
            
        </div>
    )
}

export default val;