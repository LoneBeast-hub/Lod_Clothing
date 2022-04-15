import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

// create & export collection preview
export const CollectionPreview = ({title, items}) => {
    return(
        // Collection preview
        <div className="collection-preview">
            {/* title */}
            <h1 className='title' > { title } </h1>
            {/* preview items */}
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map((item) => {
                        return(
                            <CollectionItem key={ item.id }  item={item} />
                        );
                    })
                }
            </div>
        </div>
    );
}