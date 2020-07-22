import React from 'react'
import  sfruits from './TarjetaFruta.module.css'

class TarjetaFruta extends React.Component{
    /*si se desea utilizar property initializers podemos evitar
    el constructor y sacando la variable state de este
       state ={
        cantidad: 0
      }
      agregar = () => this.setState({
        cantidad:this.state.cantidad+1
      });
      la forma de usarlo dependera del equipo de trabajo*/
    constructor(){
      super();
  
      /*una mejor practica para agregar bind(this)
      seria haciendolo aqui dento del propio constructor*/
      this.agregar = this.agregar.bind(this);
      this.restar = this.restar.bind(this);
  
      /*una mejor forma de aplicar lo anterior podria ser 
      lo siguiente*/
      const METHODS = [
        'agregar',
        'restar',
        'limpiar'
      ];
  
      METHODS.forEach((method) => {
        this[method] = this[method].bind(this);
      })
  
      this.state ={
        cantidad: 0
      }
    }
  
    agregar(){
      this.setState({
        cantidad:this.state.cantidad+1
      });
    }
    restar(){
      this.setState({
 
        cantidad:(this.state.cantidad > 0) ? this.state.cantidad-1: 0
      });
    }
  
    limpiar(){
      this.setState({
        cantidad:0
      });
    }
    render(){
      const hasItem = this.state.cantidad > 0;
      //es posible proveer los estilos mediante una propiedad constante
      /*cuando quieres agregar propiedades con dos palabras como
          margin-bottom puedes hacerso encerrandolas entre comillas
          o usando camel case marginBottom*/
          //podemos agregar una condicional ternaria para agregar propiedades dinamicas
          //background: this.state.cantidad > 0 ? 'green' :  '#FFF'
          //o bien asignar la operacion a una propiedad
      /*const styles={
          border: '1px solid black',
          marginBottom:'1em',
          borderRadius:'0.5em',
          padding: '1em',
          background: hasItem ? 'linear-gradient(45deg, black, #4a02f7)' :'#FFF',
          color: hasItem ? '#FFF' : '#000',
          transition: 'all 400ms ease-out'
      } */
      const activeClass = hasItem ? ' ' + sfruits['fruit-card-activa'] : '';
      const clases = `${sfruits['fruit-card']} ${activeClass}`;
      return(
        /*para aplicar estilos cuando trabajamos en react 
        es necesario hacerlo mediante un objeto a la propiedad style
        style={{
          border: '1px solid black
        }}*/
        //o bien podemos llamar a una propiedad style={styles}
        //en el caso de querer usar una clase y devido a que la palabra 
        //class es una palabra reservada de javaScript
        //debemos utilizar className
        //al ser un string podemos almacenarla en una propiedad y editarla dinamica mente
        <div className={clases}>
          <h3>{this.props.name}</h3>
          <hr/>
          <div>
            Cantidad: {this.state.cantidad}
          </div>
          {/* aunque se puede actualizar el estado con una funcion de flecha
          esta no es considerada la mejor practica ya que se crearia una funcion de flecha por cada 
          llamada al componente
          <button onClick={()=>{
            //podriamos usar la siguiente forma para realizar un update del estado
            //this.state.cantidad = 100
            //this.forceUpdate()
            //pero esto no es considerado una buena practica
            //por lo cual react nos provee de la siguiente
            this.setState({cantidad:this.state.cantidad+1})
            }}>Agregar</button>*/}
            {/*una mejor practica seria utilizar metodos de clases para las acciones*/}
            {/*si dejamos el llamado al metodo de clase de la siguiente manera {this.agregar}
            esto no funcionara ya que el this que se encuentra en el metodo hace referencia 
            al propio metodo por lo que seria necesario agregar la funcion bind
            <button onClick={this.agregar.bind(thhis)}>+</button>
            esto indica que cuando dentro del metodo se llama a thhiseste hace referencia
            a la clase */}
            <button onClick={this.agregar}>+</button>
            <button onClick={this.restar}>-</button>
            <button onClick={this.limpiar}>limpiar</button>
            <hr/>
            <p>$ {this.props.price}</p>
            <p>Total: $ {this.props.price * this.state.cantidad} </p>
        </div>
      )
    }
  }

  export default TarjetaFruta;