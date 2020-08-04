import React, { Component } from 'react'
import Tab from '.././Tab'
import InputNoControladoRef from '.././InputNoControladoRef'
import styles from './Tabs.module.css'
import InputNoControladoForm from '../InputNoControladoForm/InputNoControladoForm'

const tabsObject =[
    {
      text:'Inputs No controlados Ref',
      key:'inputsNoControladosRef'
    },
    {
      text:'Inputs No controlados forms' ,
      key:'inputsNoControladosForm'
    },
  ]

class Tabs extends Component{
    inputsNoControladosRef = React.createRef()
    inputsNoControladosForm = React.createRef()
    styleV = styles.tabcontent + ' ' + styles.displayblock
    styleN = styles.tabcontent + ' ' + styles.displaynone
    handleClick=(comp)=>{
        
        if(comp === "inputsNoControladosForm"){
            console.log("entra a from")
            this.inputsNoControladosRef.current.chancheVisible(this.styleN)
            this.inputsNoControladosForm.current.chancheVisible(this.styleV)
        }else{
            console.log("entra a ref")
            this.inputsNoControladosRef.current.chancheVisible(this.styleV)
            this.inputsNoControladosForm.current.chancheVisible(this.styleN)
        }
    }
    send=(data)=>{
        console.log(data)
    }
    render(){
        return(
            <div>
                <div className={styles.tab}>
                    {tabsObject.map((tab)=>{
                        return(
                            <Tab
                                tabProps={tab}
                                onComponent={this.handleClick}
                                key={tab.key}/>
                        )
                    })}            
                </div>
                    <InputNoControladoRef 
                        ref={this.inputsNoControladosRef}
                        className={this.styleN}
                        onSend={this.send}/>
                    <InputNoControladoForm
                        ref={this.inputsNoControladosForm}
                        className={this.styleN}
                        onSend={this.send}/>

            </div>
        )
    }
}

export default Tabs