import { Component } from 'react';
import './App.css';
import Data from './Components/Data/data';
import Balance from './Components/Balance/Balance';
import New from './Components/new_transaction/New_transaction';

class App extends Component {

  state = {
    history:[
      {id:"1234", type:"Cash", cost:500},
      {id:"1235", type:"Book", cost:-40},
      {id:"1236", type:"Camera", cost:-200}
    ]
  }

  AddName = (event) =>{
    const hist = [...this.state.history];
    hist.push({id:Math.random().toString,type:event.type, cost:event.cost});
    this.setState({history:hist});
  }

  render() {
    return(
      <div className="App">
        <Balance data={this.state.history}/>
        <Data data={this.state.history}/>
        <New change = {this.AddName}/>
        {console.log(this.state.history)}
      </div>
    );
  }
}

export default App;
