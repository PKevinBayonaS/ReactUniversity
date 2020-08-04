import React, {Component} from 'react';


const frutas=[
  'fresa',
  'manzana',
  'sandia',
  'kiwi',
  'durazno',
  'mango',
  'piña'
]

const users = [
  { id: 1, name: 'Gerado Gallegos', country: 'Mexico'},
  { id: 2, name: 'Leanne Graham', country: 'USA'},
  { id: 3, name: 'Ervin Howell', country: 'Colombia'},
  { id: 4, name: 'Rodrigo Fernandez', country: 'Peru'},
  { id: 5, name: 'Alfredo Bauch', country: 'Guatemala'},
  { id: 6, name: 'Fernanda Valencia', country: 'España'}
]


class App extends Component{
  state = {
    products: [
      {
        id: 1,
        name: 'camisa unicornio',
        colors: [ '#467367', '#05fd88', '#a706ee' ],
        price: 20
      },
      {
        id: 2,
        name: 'jeans',
        colors: [ '#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF' ],
        price: 32
      },
      {
        id: 3,
        name: 'taza',
        colors: [ '#804342', '#FFD2D1', '#FF8785', '#806969' ],
        price: 20
      },
      {
        id: 4,
        name: 'camisa icream',
        colors: [ '#2544B3', '#FF8A69', '#5076FF', '#7FCC2B', '#73B32E' ],
        price: 20
      },
      {
        id: 5,
        name: 'camisa dragon',
        colors: [ '#B32542', '#FF6987', '#FF4F73', '#14B32E', '#5EFF78' ],
        price: 20
      }
    ],
    user: {
      name: 'Kevin Bayona',
      country: 'Mexico',
      twitter: '@pkevinbs',
      youtube: 'Kevin Bayona'
    }
  }
  render(){
    const { user }= this.state
    const keys = Object.keys(user)
    // => [name, country, twitter, youtube]
    return (
      <div>
        <h1>
          Iterando
        </h1>
        <hr/>
        <h3>Lista de productos</h3>
        <div>
          {this.state.products.map((product)=>(
              <div>
              $ {product.price} {product.name}
              <div>
                {product.colors.map((color)=>(
                    <span style={{
                      width: '13px',
                      height: '13px',
                      borderRadius: '0.1em',
                      border: '1px solid gray',
                      display: 'inline-block',
                      margin: '0.1em',
                      background: color
                    }}/>
                  )
                )}
              </div>
              </div>
            )
          )}
        </div>
        <div>
          <h3>Iterando propiedades de objetos</h3>
          <ul>
            {keys.map((key)=>(
              <li>
                <strong> {key} </strong> {user[key]}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>
            Iterando con la propiedad key
          </h3>
          <ul>
            {users.map((user) =>(
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {frutas.map((fruta)=>{
              return(
                <li>{fruta}</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
