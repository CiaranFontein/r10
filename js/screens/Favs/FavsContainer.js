import React, {Component} from 'react';
import Favs from './Favs';

class FavsContainer extends Component {
  render() {
    return (
      <Favs navigation={this.props.navigation} SessionLists={SessionLists} />
    );
  }
}

export default FavsContainer;
