import React, {Component} from 'react';
import Session from './Session';
import {FavsContext} from '../../context/FavsContext';
class SessionContainer extends Component {
  static navigationOptions = {
    title: 'Session',
  };

  render() {
    const {navigation} = this.props;
    const {params} = navigation.state;
    return (
      <FavsContext.Consumer>
        {({favIds, addFavSession, removeFavSession}) => (
          <Session
            navigation={navigation}
            data={params[0]}
            favIds={favIds}
            addFavSession={addFavSession}
            removeFavSession={removeFavSession}
          />
        )}
      </FavsContext.Consumer>
    );
  }
}

export default SessionContainer;
