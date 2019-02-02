import React, { Component } from 'react';

class Home extends Component{
    
    componentDidMount(){
        document.title = "Home"
      }
    render(){
        return(
            <div>
            <div className=".text-info badge badge-info">
                Welcome to the project
            </div><br />
            <div className=".text-info badge badge-primary">
               Task Details:
            </div>
            <div>
              <p className=".text-info">  ## Requirements: Create React app with the following features:<br />
- It has 3 main pages Home, Users, About.<br />
- The 3 pages has:<br />
  - A fixed header in common with:<br />
    - Title: "Github users" and Github logo.<br />
    - 3 links for the pages (Home | Users | About).<br />
      - The current page link has active style.<br />
      - Change the page title with current selected page name.<br />
- Home and about has any static content.<br />
</p>
- The users page has 2 views:<br />
  - A list of Github users:<br />
    - Each user has an avatar, ID, and username.<br />
    - Users are loaded by the request ( https://api.github.com/users ).<br />
    - There is a "Load More" button at the bottom, which fetches another page of users and added it to the existing list.<br />
    - The list item is clickable to load user details in the side view of the user part<br />
      and change the url form '/users' to '/users/login'<br />
  - User part:<br />
    - Displays the first user in the list data by default after the list is loaded.<br />
    - User data is loaded by the request ( https://api.github.com/users/login ), try it: https://api.github.com/users/1 or a name instead of 1.<br />
    - This part displays the User data: user id, user avatar image, name, email, and created at.<br />

- pages' URLs:<br />
  - home: '/'.<br />
  - about: '/about'.<br />
  - users: '/users'.<br />
  - user details: '/users/login'<br />
  - Redirect from any invalid url to the home page '/'<br />
- Use react-router-dom<br />
- Use Redux where it could be used!<br />

### Preferred:<br />
- Use git and the commit messages to make sense<br />
- Use CSS Modules.<br />
- Style your pages as much as you can with the only necessary css or Sass.<br />
- Try to go with these guides as much as possible:<br />
  - https://github.com/airbnb/javascript<br />
  - https://github.com/airbnb/javascript/tree/master/react<br />
- Create unit tests that validates all your code.<br />
- If you didn't use any of the Preferred Please read about them.<br />
- In Your structure consider the project to be SCALEABLE.<br />

            </div>
             </div>
        )
    }
}

export default Home;