import React from 'react';
import './App.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Contador from './components/constructor'
import 'react-tabs/style/react-tabs.css';
import Lista from './components/render'
import Http from './components/componentDidMount/Http'
import Events from './components/componentDidMount/Eventos';

function App() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>
            <h3>Metodo Constructor</h3>
          </Tab>
          <Tab>
            <h3>Metodo Render</h3>
          </Tab>
          <Tab>
            <h3>Metodo ComponentDidMount</h3>
          </Tab>
          <Tab>
            <h3>Metodo ComponentDidUpdate</h3>
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
          
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
