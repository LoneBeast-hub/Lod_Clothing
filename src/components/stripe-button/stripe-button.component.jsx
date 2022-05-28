import { StripeCheckoutContainer } from "./stripe-button.styles";

export const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51KyISEISfQPvjVK5AW1FgBjuSSj8H2NFZY290ooOiu8qLIM5lKCZIbrJYZ3qhHQxsJtoNtGGq3QNjOlPvrdhUdXN00ScxDVvN6';
    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckoutContainer 
            label="Pay Now"
            name="Lod Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total price is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}