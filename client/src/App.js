import React, { useState } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <nav>
        <div className="nav-links">
          <NavLink to="/">Movie List</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </div>
      </nav>
      <Switch>
        <Route path="/movies/:id">
          <Movie />
          {/* <Movie items={MovieList} /> */}
        </Route>
        <Route path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
