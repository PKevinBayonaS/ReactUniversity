import React,{Component} from 'react';

class Contador extends Component{
    state ={
        video:{
            title: 'Video Likes',
            likes: 0
        }
    }
    add=()=>{
        //setState maneja una especie de pila de estados
        //por lo que si un valor del estado es modificado a
        //antes de que se renderice el cambio que se desea
        //este se podria ver afectado
        this.setState((prevState) => ({
            video:{
                ...this.state.video,
                likes: this.state.video.likes+1
            }
        }))
    }
    render(){
        return(
            <div>
                <h1>
                    {this.state.video.title}
                </h1>
                <button onClick={this.add}>
                Likes:({this.state.video.likes})
            </button>
            </div>
        )
    }
}

export default Contador;