import React from 'react';
import "../styles/LoginStyles.css";
import Front from "../images/Front.jpeg";
import applogo from "../images/applogo.jpg";
import TextInput from '../components/TextInput';
class LoginPage extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Welcome",user:"",showCredentials:false
        };
    }
    onChangeInput = (event) => {
        this.setState({user:event.target.value});
    }
    render(){
        return(
            <div class="main-container login-page">
            <div class="login-bg">
                <img src={Front} alt="Food" width="1000" height="1000"/>
            </div>
            <div class="login-form">
                <div class="app-logo">
                    <img src={applogo} alt="Logo" width="60" height="60"/>
                </div>
                <h2>SIGN IN</h2>
                <h3>{this.state.name} &nbsp; {this.state.user}</h3>
                <h4></h4>
                <form style={{textAlign: 'center'}} method="POST">
                    <div class="form-field">
                        <TextInput user = {this.state.user} onChange = {this.onChangeInput} />
                        <input type="password" class="password" placeholder="Password" required/>
                    </div>
                    <div class="form-field">
                            <input type="button" value="Submit" class="app-Button" onClick={()=>{this.setState({showCredentials:true})}} />
                    </div>
                    {
                        this.state.showCredentials && 
                        <div>
                            <p>Hi!{this.state.user}</p>
                        </div>
                    }
                    <span class="Forgot-password">Forgot Password?</span>
                    <a class="link" href="https://www.google.com/search?safe=active&sxsrf=ACYBGNQM5IYDDimAzMhIxMXzRVeWSwzbWw%3A1580490858105&source=hp&ei=amA0XuCTBOaG4-EPrIavyAM&q=forgot+password&oq=forgot+password&gs_l=psy-ab.3..0i67l8j0l2.2458.6753..7032...1.0..0.170.2272.0j15......0....1..gws-wiz.......35i39j0i131j0i20i263.jZGg8yoBYY0&ved=0ahUKEwjg8Kmhq67nAhVmwzgGHSzDCzkQ4dUDCAY&uact=5">Click Here!</a>
                </form>
            </div>
        </div>
        )
    };
}
export default LoginPage;