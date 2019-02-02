import React, { Component } from 'react';
import User from './GithubUserComponent';
class Users extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            loading:true,
            currentUserId:null,
            currentUserAvatar:null,
            currentUserName:null
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(e,user){
      console.log(user)  
      this.setState(prevStat=>(
        {users:prevStat.users,
         loading:prevStat.loading,
         currentUserName:user.login,
         currentUserAvatar:user.avatar_url,
         currentUserId:user.id   
        }) 
        )      
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
                    <div className="col-xs-6 col-sm-8 col-lg-10">
                    {this.state.currentUserName}
                    <img src={this.state.currentUserAvatar} />
                    
                    </div>                   
               </div>             
            </div>
        )
    }
}

export default Users;