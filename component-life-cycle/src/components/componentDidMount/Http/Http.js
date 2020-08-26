import React, { Component } from 'react'

class Http extends Component{
    state ={
        photos:[]
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => res.json())
          .then(photos => this.setState({ photos }))
      }

    render(){
        const {photos} = this.state
        return (
            <div>
              {photos.map(photo => (
                <img
                  key={photo.id}
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                />
              ))}
            </div>
          )       
    }
}

export default Http