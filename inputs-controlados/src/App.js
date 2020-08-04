import React, { Component } from 'react';
import './App.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InputControlado from './components/InputControlado'
import InputNoControlado from './components/InputNoControlado'
import SingleSelect from './components/SingleSlect';
import MultiSelect from './components/MultiSelect';
import CheckBox from './components/CheckBox'
import LimiteErrores from './components/LimiteErrores'
import Boton from './components/Boton'

const Unicorn = () => (
    <span role='img' aria-label='unicornio'>
      🦄
    </span>
  )

class App extends Component {
    state={
        name:'',
        email: ''
    }
    actualizar =(name, text)=>{
        this.setState({[name]: text})
    }
    send = (data) => {
        console.log(data)
      }
    render(){
        return ( 
            <div>
                <Tabs>
                    <TabList>
                        <Tab>Manejo y Propagacion deInputs</Tab>
                        <Tab>Atributo For</Tab>
                        <Tab>Formularios con Selecciones</Tab>
                        <Tab>Formularios con selecciones multiles</Tab>
                        <Tab>Input CheckBox</Tab>
                        <Tab>Manejo de Errores</Tab>
                    </TabList>
                    <TabPanel>
                        <h1>Input Controlado <Unicorn /></h1>
                        <InputControlado
                        onChange={this.actualizar}
                        placeholder='Nombre Completo'
                        name='name'/>
                        <br/>
                        <InputControlado
                        onChange={this.actualizar}
                        placeholder='Tu Email'
                        name='email'/>
                        <h2>
                            Nombre: { this.state.name }
                        </h2>
                        <h2>
                            Email: { this.state.email }
                        </h2>
                    </TabPanel>
                    <TabPanel>      
                        <div>
                            <h1>
                            Atributo ref <Unicorn />
                            </h1>
                            <InputNoControlado
                            onSend={this.send}
                            />
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div>
                        <h1>
                        Etiqueta Select <Unicorn />
                        </h1>
                        <SingleSelect/>
                    </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <h1>
                            Etiqueta Select <Unicorn />
                            </h1>
                            <MultiSelect/>
                        </div>
                    </TabPanel>
                    <TabPanel><CheckBox></CheckBox></TabPanel>
                    <TabPanel>
                        <LimiteErrores>
                            <Boton />
                        </LimiteErrores>
                        <LimiteErrores>
                            <Boton />
                        </LimiteErrores>
                        <LimiteErrores>
                            <Boton />
                        </LimiteErrores>
                    </TabPanel>
                </Tabs>
            </div>
            );
    }
    
}

export default App;