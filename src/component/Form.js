import React, { PureComponent } from 'react';
import { Grid , TextField, Button, FormControl } from '@material-ui/core';


export default class FormComponent extends PureComponent{
    constructor( props ){
        super( props )
        this.state = {
            name : '',
            password : ''
        }
    }

    onChange = ( e ) => {
        let { name } = this.state;
        name = e.target.value;
        this.setState({ name })
        
    }

    onChangePassword = ( e ) => {
        let { password } = this.state;
        password = e.target.value;
        this.setState({ password })
        
    }

    onSubmitButton = ( e ) => {
        const { name, password } =  this.state
        e.preventDefault();
        console.log( name, password) 
    }
    render(){
        let { name, password } = this.state;
        return(
            <Grid>
                <form onSubmit={this.onSubmitButton}>
                    <TextField
                        id="name"
                        label="Name"
                        margin="normal"
                        value = {name}
                        onChange = {this.onChange.bind(name)}
                    />
                      <TextField
                        type='password'
                        id="password"
                        label="Password"
                        margin="normal"
                        value = {password}
                        onChange = {this.onChangePassword.bind(password)}
                    />
                    <Button
                        type='submit'
                     
                        variant={'contained'} color = {'primary'}>Submit
                    </Button> 
                </form>    
            </Grid>
        )
    }
}