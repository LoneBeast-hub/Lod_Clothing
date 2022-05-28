import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { Component } from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// Styled Component
import { SignUpContainer, TitleContainer } from './sign-up.styles';

export class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    // handle our form submit
    handleSubmit = async (event) => {
        event.preventDefault();
        
        // state properties
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert(`Password don't match`);
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            await createUserProfileDocument(user, { displayName })

            this.setState({ 
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch(error) {
            console.log(error)
        }
    }

    // handle our input change
    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        // destructure out the properties of our App sign up state
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <SignUpContainer>
                <TitleContainer>I do not have an account</TitleContainer>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                        label='Dispaly Name'
                    />
                    <FormInput 
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                        label='Password'
                    />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                        label='Confirm Password'
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}