import React, { Component } from 'react';
import PersistenciaEventos from './components/PersistenciaEventos'
import Hijo from './components/Hijo'

const style ={
  height: '300px',
  background: 'gold',
  padding: '1em',
  boxSizing: 'border-box'
}

class App extends Component {
  state={
    x:0,
    y:0,
    text: '',
    evento:''
  }
  manejadorButton = () => {
    alert('Hola eventos')

  }
  manejador=(event)=>{
    this.setState({
      x:event.clientX,
      y:event.clientY,
    })
  }

  manejadorInput = (event) =>{
    this.setState({
      text: event.target.value,
      evento: event.type
    })
  }
  render(){ 
    return(
    <div style={style}
    onMouseMove={this.manejador}>
      <div>
        <button onClick={this.manejadorButton}>evento al hacer click</button>
        <button onMouseDown={this.manejadorButton}>evento con click sostenido</button>
        <button onMouseUp={this.manejadorButton}>evento al soltar el click</button>
        <button onDoubleClick={this.manejadorButton}>evento DOBLE click</button>
      </div>
      <div>
        <p> x: {this.state.x}</p>
        <p> y: {this.state.y}</p>
      </div>
      <div>
        <input type="text"
        onChange={this.manejadorInput}
        onCopy={this.manejadorInput}
        onPaste={this.manejadorInput}/>
        <h1>{this.state.text}</h1>
        <h2>{this.state.evento}</h2>
      </div>
      <PersistenciaEventos></PersistenciaEventos>
      <Hijo/>
    </div>
   );
  }
}

export default App;
