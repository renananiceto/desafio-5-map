import React, { Component } from 'react';

class App extends Component{
  state = {
    nome: 'Juquinha',
    amigos:['Luan', 'ana', 'maria', 'dora', 'pedro','alan']
  }
 
  render(){
    return(
      <div>
        {this.state.amigos.map((item)=>(
          <p>{item}</p>
        ))}
      </div>
    )
  }
}

export default App;
