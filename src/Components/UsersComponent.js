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
            currentUserName:null,
            lastIndex:17
        }
        this.handleClick=this.handleClick.bind(this)
        
    }

    handleClick(e,user){
        
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

    handleLoadMore(e,i){
    
         this.setState(
            {
             lastIndex:i+5   
            }
            )  
    }

    componentDidMount(){
        document.title = "Users";
        fetch("https://api.github.com/users")
        .then(Response=>Response.json())
        .then(data=>this.setState({users:data,loading:false}));
        
    }
    render(){

        let userNames = this.state.users.slice(0,this.state.lastIndex).map(u=><User key={u.id} show={this.handleClick} userData={u}/>)
       
        return(
            <div>
               {this.state.loading && <h5>Fetching Data...</h5>} 
               <div className="row">
        <div className="col-xs-6 col-sm-4 col-lg-2" style={{"borderRight": "thick solid #A9A9A9"}}>{!this.state.loading &&<div className="badge badge-info">Users</div>}{userNames}
                    {!this.state.loading && <button onClick={(event)=>this.handleLoadMore(event,this.state.lastIndex)} className="btn btn-success btn-sm">Load more ...</button>}
                    </div>
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