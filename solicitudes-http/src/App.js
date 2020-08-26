import React from 'react';
import './App.css';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ApiRestCall from './component/ApiRestCall';
import 'react-tabs/style/react-tabs.css';
import BuscadorPeliculas from './component/BuscadorPeliculas/BuscadorPeliculas';
import BuscadorPeliculasAxios from './component/BuscadorPeliculasAxios';

function App() {
    return ( 
        <div>
            <Tabs>
                <TabList>
                    <Tab>Hacer LLamada a Api Rest</Tab>
                    <Tab>Buscador de Peliculas</Tab>
                    <Tab>Buscador de Peliculas Con Axios</Tab>
                </TabList>
                <TabPanel>
                    <ApiRestCall/>
                </TabPanel>
                <TabPanel>
                    <BuscadorPeliculas></BuscadorPeliculas>
                </TabPanel>
                <TabPanel>
                    <BuscadorPeliculasAxios/>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default App;