//con react y react dom podremos renderizar objetos en el dom
import React from 'react';
import ReactDOM from 'react-dom';

//dentro de react podemos injectar expresiones, estas utilizando llaves y poniendo el valor dentro de llas
const name = 'Kevin B.';

//tambien podemos injectar objetos o acceder a alguna de sus propiedades
const users = {
  user1:{name:name,
    age: 27,
    country: 'Mexico'},
  user2:{name:'Jose',
    age: 25,
    country: 'Mexico'}
  
};

//incluso dentro de las llaves podemos realizar operaciones o injectar funciones
function getInfo (user1){
  return `hola yo tengo ${user1.age} años y soy de ${user1.country}`;
}

// jsx nos permite tener codigo JS y html en el mismo archivo
//podemos crear variables que nos ayudaran a renderizas elementos en el dom
//const App=<h1>{getInfo(user)}</h1>;
//en este caso creamo una constante con el id del objeto donde sera 
//renderizado nuestro objeto constante
//const root = document.getElementById('root');

//podemos crear componentes de tres formas
/*function TerjetaPresentacion(){
  return (
    <div>
      <h3>Titulo</h3>
      <hr/>
      <p>Lorem ipsun dolor sit</p>
    </div>
  )
}*/
/*const TerjetaPresentacion = () =>{
  return (
    <div>
      <h3>Titulo</h3>
      <hr/>
      <p>Lorem ipsun dolor sit</p>
    </div>
  )
}*/

const TerjetaPresentacion = (props) => (
    <div>
      <h3>{props.name}</h3>
      <hr/>
      <p>{getInfo(props.descripcion)}</p>
    </div>
  )

  const App = () =>(
    <div>
      <TerjetaPresentacion name = {users.user1.name} descripcion={users.user1}/>
      <TerjetaPresentacion name ={users.user2.name} descripcion={users.user2}></TerjetaPresentacion>
    </div>
  )

//al ser root una constante no es necesario crear la constante que almacenara al objeto
//podemos renderizalor directamente con el objeto getElementByID
//ReactDOM.render(App, root);
ReactDOM.render(<App/>, document.getElementById('root'));