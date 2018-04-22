import React ,{Component }from 'react'
import LoginForm from '../../components/login'
import './login.css'

class Login extends Component {

    submit = values => {
    

        console.log(arguments)

    }

render(){
    return(
        <div id="login" className="container-fluid w-100">
            <div className="w-50">
                <h1>Login</h1>
                <LoginForm handleSubmit={this.submit} />
            </div>
            <div id="banner" className="w-50">
                imagem
            </div>
        </div>
    )
}
}



export default  Login