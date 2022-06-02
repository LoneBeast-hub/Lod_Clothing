import styled, { css } from 'styled-components';

const infoStyles = css`
    width: 23%;
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const ImgContainer = styled.img`
    width: 100%;
    height: 100%;
`;

export const NameContainer = styled.span`
    ${infoStyles}
`;

export const QuantityContainer = styled.span`
    ${infoStyles}
    display: flex;
`;

export const PriceContainer = styled.span`
    ${infoStyles}
`;

export const ArrowContainer = styled.div`
    cursor: pointer;
`;

export const ValueContainer = styled.span`
    margin: 0 10px;
`;

export const RemoveButtonContainer = styled.span`
    padding-left: 12px;
    cursor: pointer;
`;