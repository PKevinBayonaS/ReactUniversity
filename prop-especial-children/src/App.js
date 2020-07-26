import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

const noop = () =>{}


class Profile extends Component{
  //las propTypes puden usarse dentro de la clase
  //haciendo uso de la palabra reservada static
  static propTypes = {
    name: propTypes.string.isRequired,
    bio: propTypes.string,
    email: propTypes.string,
    age: propTypes.number
  }

  //igual que las proptypes podemos utilizars las defaultProps
  //dentro de la clase
  static defaultProps ={
    name:' P. Kevin Bayona Smythe',
    onHello: noop
  }
  saluda=()=>{
    this.props.onHello()
  }

  render(){
    const {name, bio, email} = this.props
    return(
      <div>
        <h1>{name}</h1>
        <p>
          {bio}
        </p>
        <a href={`mailto:${email}`}>{email}</a>
        <br/>
        <button onClick={this.saluda}>saluda</button>
      </div>
    )
  }
}

//para declarar las propTypes podemos hacerlo despues de la clase
//en la que deseamos utilizarlas
//declarandolas como un objeto
//Profile.propTypes={}

//al igual que podemos declarar los propTypes
//podemos delcarar valores por defecto en componentes estatales al
//igual que en proptypes despues de declarar la clase
//Profile.defaultProps = {}

class PortalModal extends Component{
  render(){
    if(!this.props.visible){
      return null
    }

    const styles ={
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      background: 'linear-gradient(to top right, #667eea, #764ba2',
      opacity: '0.9',
      color: '#FFF'
    }

    return ReactDOM.createPortal((
      <div style={styles}>
        {this.props.children}
      </div>
    ), document.getElementById('modal-root'))
  }
}


const Title = ({uiColor, children}) => {
  const styles = {
    padding: '0.3em',
    color:'#FFF',
    background: uiColor,
    textAlign: 'center',
    borderRadius: '0.3em',
    fontSize: '50px'
  }
  console.log(children)
  return(
  <h1 style={styles}>{children}</h1>
  )
}

const Computo = () =>(
  <Fragment>
    <li >Monitor</li>
    <li >Mouse</li>
    <li >Teclado</li>
  </Fragment>
)

const Ropa = () =>(
  <Fragment>
    <li >Pantalon</li>
    <li >Camisa</li>
    <li >Zapatos</li>
  </Fragment>
)


class App extends Component {
  state = {
    uiColor:'purple',
    visible:false,
    num:0
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState(state =>({
        num: state.num+1
      }))
    },1000)
  }

  mostrar=()=>{
    this.setState({visible: true})
  }
  cerrar=()=>{
    this.setState({visible: false})
  }
  render(){
    const {uiColor} = this.state
    return (
      <div>
        <Title 
          uiColor={uiColor}
          >
            {/*de querer aplicar otro elemento dentro de la propiedad
          podemos hacerlo dento de expresiones
          {<div> Kevin <em>Bayona</em></div>} 
          esto tambien se podria con Fragments
          {<>Kevin <em>Bayona</em></>}
          una mejor opcion podria ser usar la prop children*/}
              Kevin <em>Bayona</em>
          </Title>
          <Computo></Computo>
          <Ropa></Ropa>
          <button onClick={this.mostrar}>Mostrar</button>
          <PortalModal visible={this.state.visible}>
            <h1>
              Hola desde un portal modal {this.state.num}
            </h1>
            <button onClick={this.cerrar}>cerrar</button>
          </PortalModal>
          <Profile 
          bio='Soy un desarollador FullStack my email@email.com'
          email='email@email.com'/>
      </div>
    );
  }
}

export default App;
