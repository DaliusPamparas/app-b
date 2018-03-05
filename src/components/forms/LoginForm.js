import React from 'react';
import {Button, Form} from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
 state = {
     data: {
         email: '',
         password: ''
     }
     ,
     loading: false,
     errors: {}

 }
 
onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});
onSubmit = () =>{
    const errors = this.validate(this.state.data);
    this.setState({ errors });
} ;
validate = (data) => {
    const errors = {};
    if(!Validator.isEmail(data.email)) errors.email = 'Email not valid';
    if(!data.password) errors.password = 'Cant be blank';
    return errors;
}

 render(){
     const { data } = this.state;
     return(
        <div>
            <Form onSubmit = {this.onSubmit} >
                <Form.Field>
                    <label htmlFor='email'>Email:
                    </label>
                    <input type='email' 
                        id='email' 
                        placeholder='dinmail@email.se' 
                        name='email'
                        //value={this.state.data.email}
                        value={data.email}
                        onChange={this.onChange}
                        />

                </Form.Field>
                <Form.Field>
                    <label htmlFor='password'>Password:
                    </label>
                    <input type='password' 
                        id='password' 
                        placeholder='din password' 
                        name='password'
                        //value={this.state.data.email}
                        value={data.email}
                        onChange={this.onChange}
                        />

                </Form.Field>
                <Button circular>
                    Logg in
                </Button>
            </Form>
        </div>
     );
 }

}
export default LoginForm;