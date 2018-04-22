import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">Login</label>
                <Field name="email" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Senha</label>
                <Field name="senha" component="input" type="text" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}


export default  reduxForm({
    // a unique name for the form
    form: 'loginfrm'
})(LoginForm)