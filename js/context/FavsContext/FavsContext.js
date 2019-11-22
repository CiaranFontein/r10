import React, {Component} from 'react';
import {addFav, removeFav, getAllFavs} from '../../config/models';
export const FavsContext = React.createContext();

class FavsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favIds: [],
    };
  }

  componentDidMount() {
    this.getFavedSessionIds();
  }

  getFavedSessionIds = async () => {
    try {
      const favs = await getAllFavs();
      const ids = favs.map(fav => fav[0]);
      this.setState({favIds: ids});
    } catch (e) {
      console.log(e);
    }
  };

  addFavSession = async favId => {
    try {
      const newFav = await addFav(favId);
      if (newFav) this.setState({favIds: [...this.state.favIds, newFav.Id]});
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  removeFavSession = async sessionId => {
    try {
      await removeFav(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <FavsContext.Provider
        value={{
          ...this.state,
          addFavSession: this.addFavSession,
          removeFavSession: this.removeFavSession,
        }}>
        {this.props.children}
      </FavsContext.Provider>
    );
  }
  // more code will go here!
}
export default FavsProvider;
