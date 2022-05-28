import CollectionItem from '../collection-item/collection-item.component';
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';

// create & export collection preview
export const CollectionPreview = ({title, items}) => {
    return(
        // Collection preview
        <CollectionPreviewContainer>
            {/* title */}
            <TitleContainer> { title } </TitleContainer>
            {/* preview items */}
            <PreviewContainer>
                {
                    items.filter((item, index) => index < 4).map((item) => {
                        return(
                            <CollectionItem key={ item.id }  item={item} />
                        );
                    })
                }
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}