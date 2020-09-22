import React , {Component} from 'react'

const chatStyle ={
    width:230,
    height:300,
    border: '1px solid gray',
    overflow: 'auto',
    fontFamily: 'monospace'
  }
  
  const messageStyle = {
    padding: '1em',
    borderBottom: '1px solid #DDD'
  }
  
  const avatarStyle = {
    width: 50,
    height: 50,
    borderRadius: '50%'
  }

class Chat extends Component{
    box = React.createRef();

    getSnapshotBeforeUpdate (){
        const box = this.box.current

        if(box.scrollTop + box.offsetHeight >= box.scrollHeight){
            return true
        }

        return false
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const box = this.box.current
        console.log(snapshot)
        if(snapshot){
            box.scrollTop=box.scrollHeight
        }
    }

    render(){
        return(
            <div style = {chatStyle}
            ref={this.box}>
                {this.props.list.map(item =>(
                    <div key={item.id}
                    style={messageStyle}>
                        <p>{item.message}</p>
                        <div>
                            {item.name}
                        </div>
                        <img 
                        src={item.avatar}
                        alt='Avatar'
                        style={avatarStyle}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default Chat