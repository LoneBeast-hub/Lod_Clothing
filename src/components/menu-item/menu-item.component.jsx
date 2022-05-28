import { useNavigate } from 'react-router-dom';

// styled Component
import { MenuItemContainer, BgImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

// menuItem with destructured props
export const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    let navigate = useNavigate();
    return(
        <MenuItemContainer size={size} onClick={ 
            () => {
                navigate(linkUrl);
            }
         } >
            <BgImageContainer
                imageUrl={imageUrl}
            />
            <ContentContainer>
                <TitleContainer> { title.toUpperCase() } </TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    );
}