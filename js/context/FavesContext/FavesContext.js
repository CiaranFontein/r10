import React, {Component} from 'react';
import {addFav, removeFav, getAllFaves} from '../../config/models';
export const FavesContext = React.createContext();

class FavesProvider extends Component {
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
      const faves = await getAllFaves();
      const ids = faves.map(fav => fav[0]);
      //this.state.favIds = ids;
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
      <FavesContext.Provider
        value={{
          ...this.state,
          addFavSession: this.addFavSession,
          removeFavSession: this.removeFavSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
  // more code will go here!
}
export default FavesProvider;
