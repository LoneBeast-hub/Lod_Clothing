import './shop.styles.scss';
// import shop data
import { SHOP_DATA } from './shop.data';
import { Component } from 'react';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

export class ShopPage extends Component {
    constructor() {
        super();

        this.state = {
            // use shop data
            collections: SHOP_DATA
        }
    }

    render() {
        let { collections } = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => {
                        return(
                            <CollectionPreview key={id} {...otherCollectionProps} />
                        );
                    })
                }
            </div>
        );
    }
}