import { connect } from 'react-redux';

import ListItem from '../components/ListItem.jsx';
import { handleRsvpClick } from '../actions/handleRsvpClick';
import { beginLocationHover, endLocationHover } from '../actions/handleHover';
import isHoveredLocation from '../selectors/isHoveredLocation';

const mapStateToProps = (state, props) => ({
  hover: isHoveredLocation(state, props.location),
});

const mapDispatchToProps = (dispatch, props) => ({
  handleRsvpClick: () => dispatch(handleRsvpClick(props.location)),
  onHover: () => dispatch(beginLocationHover(props.location)),
  onHoverEnd: () => dispatch(endLocationHover()),
});

const ListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ListItem);

export default ListItemContainer;
