import './sign-in.styles.scss';
import { Component } from 'react';
// components import
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
// methods import
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.utils';

export class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // state properties
        const { email, password } = this.state;

        // on form submit, reset the input fields to empty
        try {
            await signInWithEmailAndPassword(auth, email, password);
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        // destructure out the name and value of an input field
        const { name, value } = event.target;

        // assign value to name in state
        this.setState(() => {
            return({ [name]: value });
        })
        console.log(this.state)
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an accout</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                     name='email' 
                     type="email" 
                     value={this.state.email} 
                     required 
                     label='Email'
                     handleChange={this.handleChange}
                     />
                    <FormInput
                     name='password' 
                     type="password" 
                     value={this.state.password} 
                     required 
                     label='Password'
                     handleChange={this.handleChange}
                     />

                     <div className="buttons">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                     </div>
                </form>
            </div>
        );
    }
}