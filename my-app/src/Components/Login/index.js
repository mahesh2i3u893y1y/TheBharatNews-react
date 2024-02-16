import {Component} from "react"
import "./index.css"

class Login extends Component{
    state={inputName:"",password:""}


onSubmitForm = async (event) =>{
    event.preventDefault()

}

    onChangePassword = (event) =>{
        this.setState({password:event.target.value})
    }

    OnChangeUserName = (event) =>{
        this.setState({inputName:event.target.value})
    }



    renderPassword = () =>{
        const {password} = this.state
        return(
            <>
                <label className="lable" htmlFor="password">PASSWORD</label>
                <input type="password" id="password" placeholder="Password" value={password} 
                className="Input-container" onChange={this.onChangePassword}/>
            </>
        )
    }

    renderInputName = () =>{
        const {inputName} = this.state
        return(
            <>
                <label className="lable" htmlFor="input-name">USERNAME</label>
                <input id="input-name" placeholder="Username" type="text" onChange={this.OnChangeUserName}
                value={inputName} className="Input-container"/>
            </>
        )
    }
    render() {
        return(
            <div className="main-container">
                <div className="login-container">
                    <form className="form-details" onSubmit={this.onSubmitForm}>
                        <div className="input-container">{this.renderInputName()}</div>
                        <div className="input-container">{this.renderPassword()}</div>
                        <button type="submit" className="login-button">Login</button>
                    </form>

                </div>

            </div>
        )
    }
}

export default Login