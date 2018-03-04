import React from 'react';
import {Button, Form} from 'semantic-ui-react';

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