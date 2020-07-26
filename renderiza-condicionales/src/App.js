import React, {Component} from 'react';


const Ternario = (props) =>{
  return(
    <div>
      <di>
  {props.name && <strong>{props.name}</strong>}
      </di>
      {props.presentacion
      ? (
        <h1>Me llamo Kevin</h1>
      ) : (
        <p>
          aqui no hay nadie
       </p>
      )}
    </div>

  )
}
//asiendo uso de return podemos tener muchas condicionales
//en casos simples en los que tenemos solo dos estados
//podemos utilizar un condicional ternario

const Saludo =(props)=>{
  if(props.Saluda){
    return(
      <h1>Hola amigo mio desde el mundo de react</h1>
    )
  }
  return(
    <p>
      no hay mensajes para ti, lo siento
    </p>
  )
}


class App extends Component {
  state={
    template:`
      <h1>Inyectando HTML con react</h1>
      <br/>
      <hr/>
      <a href="www.google.com">algun link</a>
    `
  }

  render(){
    return(
      <div>
        {/* con react cuando los valores boleanos son true 
        no es necesario especificar el valor */}
        <Saludo Saluda></Saludo>
        <Ternario presentacion name='Kevin Bayona'/>

          {/*en el caso de que sea necesario realizar una inyeccion de HTML
            lo cual no es recomendado y de ser necesario solo debe hacerse de
            fuentes confiables y no desde el inicio del usuario 
          para evitar problemas de seguridad*/} 
          <div dangerouslySetInnerHTML={{__html: this.state.template}} >
            
          </div>
      </div>
    )
  }
}

export default App;
