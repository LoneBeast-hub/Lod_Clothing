import { Component } from 'react';
import { connect } from 'react-redux';
// components import
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
// styled Component
import { SignInContainer, TitleContainer, ButtonsContainer } from './sign-in.styles';

import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
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
        const { emailSignInStart } = this.props;
        
        // pass email and password into our emailSignInStart payload
        emailSignInStart(email, password);
    }

    handleChange = (event) => {
        // destructure out the name and value of an input field
        const { name, value } = event.target;

        // assign value to name in state
        this.setState(() => {
            return({ [name]: value });
        })
    }

    render() {
        const { googleSignInStart } = this.props
        return(
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
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

                     <ButtonsContainer>
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                     </ButtonsContainer>
                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return({
        googleSignInStart: () => {
            dispatch(googleSignInStart())
        },
        emailSignInStart: (email, password) => {
            dispatch(emailSignInStart({email, password}))
        }
    })
}

export default connect(null, mapDispatchToProps)(SignIn)