import './custom-button.styles.scss';

export const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => {
    return(
        <button className={`${inverted? 'inverted' : ''} ${isGoogleSignIn? 'google-sign-in': ''} custom-button`} {...otherProps} >
            {children}
        </button>
    );
}