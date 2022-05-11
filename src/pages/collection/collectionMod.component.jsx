import { useParams } from "react-router-dom";
import CollectionPage from './collection.component'

export const CollectionPageMod = (props) => {
    // get the custom params
    let { collectionId } = useParams();
    return(
        <div>
            <CollectionPage collectionId={collectionId} {...props} />
        </div>
    )
}
