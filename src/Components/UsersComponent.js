import React, { Component } from 'react';
import User from './GithubUserComponent';
class Users extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            loading:true,
            currentUser:""
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(e){
       this.setState({currentUser:e.nativeEvent.target.attributes.value.nodeValue}) 
       console.log(e.nativeEvent.target.attributes.value.nodeValue)
       
    }
    componentDidMount(){
        document.title = "Users";
        fetch("https://api.github.com/users")
        .then(Response=>Response.json())
        .then(data=>this.setState({users:data,loading:false}));
        
    }
    render(){
        let userNames=this.state.users.map(u=><User key={u.id} show={this.handleClick} userData={u}/>)
        return(
            <div>
               {this.state.loading && <h5>Fetching Data...</h5>} 
               <div className="row">
                    <div className="col-xs-6 col-sm-4 col-lg-2" style={{"borderRight": "thick solid #A9A9A9"}}>{userNames}</div>
                    <div className="col-xs-6 col-sm-8 col-lg-10">{this.state.currentUser}</div>                   
               </div>             
            </div>
        )
    }
}

export default Users;