import { connect } from 'react-redux';
import { Component } from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';
// Styled Component
import { SignUpContainer, TitleContainer } from './sign-up.styles';

class SignUp extends Component {
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
        // props
        const { signUpStart } = this.props
        // state properties
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert(`Password don't match`);
        }

        signUpStart({ displayName, email, password })
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

const mapDispatchToProps = (dispatch) => {
    return({
        signUpStart: (userCredentials) => {
            return(dispatch(signUpStart(userCredentials)));
        }
    });
}

export default connect(null, mapDispatchToProps)(SignUp);