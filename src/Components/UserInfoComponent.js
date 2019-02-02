import React,{Component} from 'react'

class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:props.userName,
            photo:props.photo,
            id:props.id
        }
    }

    render(){
        return(
            <div>
                  <h5 className="text-center card-title">User Info</h5>
                  <div className="text-center">
                        <img className="" src={this.props.photo} width="200" height="200" alt="Github User Avatar"/><br/>
                        <p className="badge badge-success">{this.props.userName}</p> 
                  </div>
                  <hr style={{border:"solid #A9A9A9"}}/>
                  <h5 className="text-center">Name: <strong>{this.props.userName}</strong></h5>
                  <hr style={{border:"solid #A9A9A9"}}/>
                    Bio:<pre>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin <br/>literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <br/>
                    College in Virginia, looked up one of the more obscure Latin words<br/>
                    the cites of the word in classical </pre>
            </div>
        )
    }
}

export default UserInfo;