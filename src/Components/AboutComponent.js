import React, { Component } from 'react';
import  Walid from '../Images/walid.jpg';


class About extends Component{
    
    componentDidMount(){
        document.title = "About"
      }
    
    render(){
        return(
          <div className="container">
            <p className="badge badge-danger">My Info:</p>
           <blockquote class="blockquote">
                <img src={Walid} width="300" height="300" alt="Walid's"/>
                <footer className="blockquote-footer badge badge-info">Walid Ahmed "Software Engineer"</footer>
            </blockquote>          
          </div>  
        )
    }
}

export default About;