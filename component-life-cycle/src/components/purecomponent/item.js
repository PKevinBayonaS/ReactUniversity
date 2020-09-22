import React, { PureComponent } from 'react'

const itemStyles = {
    padding: '1em',
    borderBottom: '1px solid #CCC',
    marginTop: '0.4em'
  }

  class ItemPure extends PureComponent{
      handleClick=()=>{
          this.props.onRemove(this.props.item)
      }

      render(){
          const {item} = this.props

          console.log('Render 🔥 ' + item.text)

          return(
              <div style={itemStyles}>
                  <button onClick={this.handleClick}>x</button>
                  <span>
                      {item.text}
                  </span>
              </div>
          )
      }
  }

  export default ItemPure