// styled Components
import { CartItemContainer, ItemDetailsContainer, NameContainer, ImgContainer } from "./cart-item.styles";

export const CartItem = ({ item: {imageUrl, name, price, quantity} }) => {
    return(
        <CartItemContainer>
            <ImgContainer src={imageUrl} alt="item" />
            <ItemDetailsContainer className="item-details">
                <NameContainer className="name"> {name} </NameContainer>
                <span> {quantity} x ${price} </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}