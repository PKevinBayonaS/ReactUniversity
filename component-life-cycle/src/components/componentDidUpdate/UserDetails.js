import React, {Component} from 'react'

class UserDetails extends Component{
    state={
        user:{},
        isFetching: false
    }

    componentDidMount(){
        this.fetchData()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.userId !== this.props.userId){
            this.fetchData()
        }
    }

    fetchData= () =>{
        this.setState({
            isFetching:true
        })
        const URL = 'https://jsonplaceholder.typicode.com/users/' + this.props.userId
        fetch(URL).then(res=>res.json()).then(user=>this.setState({
            user,
            isFetching:false
        }))        
    }

    render(){
        return(
            <div>
                <h2>User Details</h2>
                {this.state.isFetching 
                    ? <h1>Cargando...</h1>
                    : (
                        <prev>
                            {JSON.stringify(this.state.user, null, 4)}
                        </prev>
                    )
                }
            </div>
        )
    }
}

export default UserDetails