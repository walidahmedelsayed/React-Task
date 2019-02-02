import React, { Component } from 'react';

class User extends Component{

    constructor(props){
        super()
        this.state={user:props.userData}
    }

    render(){
        return(
            <div onClick={(event)=>this.props.show(event,this.state.user)} >
                {this.state.user.login}
            </div>
        )
    }
}    

export default User