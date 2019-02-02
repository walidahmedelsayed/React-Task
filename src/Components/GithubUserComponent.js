import React, { Component } from 'react';

class User extends Component{

    constructor(props){
        super()
        this.state={user:props.userData}
    }

    render(){
        return(
            <div onClick={this.props.show} value={this.state.user.login}>
                {this.state.user.login}
            </div>
        )
    }
}    

export default User