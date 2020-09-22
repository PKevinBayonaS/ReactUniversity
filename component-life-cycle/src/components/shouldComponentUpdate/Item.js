import React, { Component } from 'react'

const itemStyles = {
    padding: '1em',
    borderBottom: '1px solid #CCC',
    marginTop: '0.4em'
  }

  class Item extends Component{
      handleClick = () => {
          this.props.onRemove(this.props.item)
      }

      shouldComponentUpdate(nextProps, nextState){
          if(nextProps.item.id !== this.props.item.id){
              return true
          }
          return false
      }

      render(){
          const {item} = this.props
          console.log('Render 🔥 ' + item.text)
          return(
              <div style = {itemStyles}>
                  <button onClick={this.handleClick}>
                      x
                  </button>
                  <span>
                    {item.text}
                  </span>
              </div>
          )
      }
  }

  export default Item