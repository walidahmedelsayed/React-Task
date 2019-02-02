import React, { Component } from 'react';
import User from './GithubUserComponent';
import UserInfo from './UserInfoComponent';

class Users extends Component{
    constructor(){
        super()
        this.state={
            users:[],
            loading:true,
            showUserData:false,
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
         showUserData:true,
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
                    <div className="col-xs-6 col-sm-4 col-lg-2" style={{"borderRight": "thick solid #A9A9A9"}}><div className="badge badge-info">Users</div>{userNames}</div>
                    <div className="col-xs-6 col-sm-8 col-lg-10">
                    {this.state.showUserData &&  <UserInfo userName={this.state.currentUserName}
                                                           photo={this.state.currentUserAvatar}
                                                           id={this.state.currentUserId}
                    />}
                   
                    
                    </div>                   
               </div>             
            </div>
        )
    }
}

export default Users;