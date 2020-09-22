import React, { Component } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MInstancia from './components/metodosdeinstancia';
import EventBubbling from './components/eventbubbling';

class App extends Component{
  render(){
    return(
      <Tabs>
        <TabList>
          <Tab>
            comunicacion con metodos de instancia(de padre a hijo)
          </Tab>
          <Tab>
            comunicacion Event Buibbling (de Hijo a padre)
          </Tab>
          <Tab>
            comunicacion con metodos de instancia(entre hermanos)
          </Tab>
        </TabList>
        <TabPanel><MInstancia/></TabPanel>
        <TabPanel><EventBubbling/></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    )
  }
}

export default App;
