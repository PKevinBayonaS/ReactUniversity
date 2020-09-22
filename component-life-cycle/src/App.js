import React, { Component } from 'react';
import './App.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Contador from './components/constructor'
import 'react-tabs/style/react-tabs.css';
import Lista from './components/render'
import Http from './components/componentDidMount/Http'
import Events from './components/componentDidMount/Eventos';
import UserDetails from './components/componentDidUpdate'
import Chat from './components/getSnapShotBeforeUpdate';
import faker from 'faker'
import Contador2 from './components/getDerivedStateFromProps/Contador'
import Item from './components/shouldComponentUpdate'
import ItemPure from './components/purecomponent';

class App extends Component {
  state ={
    id:1,
    list:[],
    numero:0,
    task:[]
  }

  aumentar = () => {
    this.setState(state =>({
      id: state.id+1
    }))
  }

  handleChange = (e) => {
    let numero = parseInt(e.target.value)
    if(isNaN(numero)){
      numero=0
    }
    this.setState({numero})
  }

  addMessage = () => {
    //crear mensaje falso
    const message ={
      id: faker.random.uuid(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      message: faker.hacker.phrase()
    }

    //agregarlo a la lista
    this.setState(state =>({
      list:[
        ...state.list,
        message
      ]
    }))
  }
  agregar = (e) => {
    e.preventDefault()
    const text = e.target[0].value
    const id = Math.random().toString(16)
    const pendiente = {text, id}

    this.setState(state=>({
      task:[
        ...state.task,
        pendiente
      ]
    }))
    e.target[0].value=''
  }

  eliminar = (item) => {
    this.setState(state=>({
      task:state.task.filter(_item =>{
        return item.id !== _item.id
      })
    }))
  }
  render(){
    const { id, list, numero } = this.state
    return (
      <div>
        <Tabs>
          <TabList>
            <Tab>
              <h5>Metodo Constructor</h5>
            </Tab>
            <Tab>
              <h5>Metodo Render</h5>
            </Tab>
            <Tab>
              <h5>Metodo componentDidMount</h5>
            </Tab>
            <Tab>
              <h5>Metodo componentDidUpdate</h5>
            </Tab>
            <Tab>
              <h5>Metodo getSnapshotBeforeUpdate</h5>
            </Tab>
            <Tab>
              <h5>Metodo getDerivedStateFromProps</h5>
            </Tab>
            <Tab>
              <h5>Metodo shouldComponentUpdate</h5>
            </Tab>
            <Tab>
              <h5>PureComponent</h5>
            </Tab>
          </TabList>
          <TabPanel>
            <h1>Constructor</h1>
            <Contador num={1200}/>
            <Contador num={20}/>
          </TabPanel>
          <TabPanel>
            <h1>Render</h1>
            <Lista></Lista>
          </TabPanel>
          <TabPanel>
            <h1>ComponentDidMount</h1>
            <div>
              <Tabs>
                <TabList>
                  <Tab>
                    <h4>Llamadas HTTP</h4>
                  </Tab>
                  <Tab>
                    <h4>Escuchadores de Eventos</h4>
                  </Tab>
                </TabList>
                <TabPanel>
                  <Http></Http>
                </TabPanel>
                <TabPanel>
                  <Events/>
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h1>ComponentDidUpdate</h1>
              <h2>ID: {id}</h2>
              <button onClick={this.aumentar}>Aumentar</button>
              <UserDetails userId={id}/>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h3>getSnapShotBeforeUpdate</h3>
              <Chat list={list}></Chat>
              <button onClick={this.addMessage}>NEW MESSAGE</button>
            </div>
          </TabPanel>
          <TabPanel>
            <h3>getDerivedStateFromProps</h3>
            <h2>{numero}</h2>
            <input type="text" onChange={this.handleChange}/>
            <Contador2 num={numero}/>
          </TabPanel>
          <TabPanel>
            <h3>shouldComponentUpdate</h3>
            <form onSubmit={this.agregar}>
              <input type='text' placeholder='Ingresa tu pendiente' />
              <button>agregar</button>
            </form>
            <div>
              {this.state.task.map(item =>(
                <Item
                  key={item.id}
                  item={item}
                  onRemove={this.eliminar}/>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h3>PureComponent</h3>
            <form onSubmit={this.agregar}>
              <input type='text' placeholder='Ingresa tu pendiente' />
              <button>agregar</button>
            </form>
            <div>
              {this.state.task.map(item =>(
                <ItemPure
                  key={item.id}
                  item={item}
                  onRemove={this.eliminar}/>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
