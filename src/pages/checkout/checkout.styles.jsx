import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px) {
        width: 80%;
    }

    @media screen and (max-width: 560px) {
        width: 90%;
    }

    @media screen and (max-width: 500px) {
        width: 96%;
    }
`;

export const CheckoutHeaderContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    @media screen and (max-width: 500px) {
        & span {
            font-size: 13px;
        }
    }
`;

export const HeaderBlockContainer = styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }

    @media screen and (max-width: 500px) {
        &:last-child {
            width: 12%;
        }
    }
`;

export const TotalContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;

export const TestWarningContainer = styled.div`
    text-align: center;
    margin: 20px;
    font-size: 24px;
    color: red;
`;