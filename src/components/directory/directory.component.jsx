import './directory.styles.scss';
import { MenuItem } from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

const Directory = ({ sections }) => {
  return(
    // directory menu
      <div className="directory-menu">
          {
              sections.map(
                  ({id, ...otherSectionProps}) => {
                      return(
                          // use MenuItem component
                          <MenuItem key={id} { ...otherSectionProps } />
                      );
                  }
              )
          }
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);