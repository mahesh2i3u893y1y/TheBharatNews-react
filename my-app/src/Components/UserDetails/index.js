import {Link} from "react-router-dom"

import { Component } from "react"

import "./index.css"

class UserDetails extends Component{

    render(){
        return(
            <div className="popup-container">
                <img src="https://res.cloudinary.com/dj4bfvysr/image/upload/v1708059895/pexels-anna-shvets-3962259_a0hm6l.jpg" className="sorry-image" alt="sorry"/>
                <h1 > Profile page not Created Yet!!!!!</h1>
                <Link to="/"><button className="back-button">Back</button></Link>
          </div>
         )
    }
}

export default UserDetails

