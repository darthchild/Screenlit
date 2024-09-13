import logo from "./logo.svg";
import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  /*
  Returning a destructured array from teh useState Hook, the 1st item in the Des. array
  "movie" will store an array of movie data returned from a call to the relevant API endpoint
  the 2nd item "setMovies" is a functions which can be used to change the state of the "movies"
  varaible

  when the state of the var tracked by React through teh useState hook is changed, the component
  is re rendered by React
  Here the "App" component will be re-rendered when state of the "movies" var changes
  
  GET request to a API endpoint that returns an array of movie data, Once the movie data is 
  succesfully returned, the code that changes the state of "movies" is executed
  
  
  "async await" -> used for asynchronous thread management
  ensures the UI is not blocked when potentially long running operations like a remote API call
  are processed, the UI thread is not blocked & will still be responsive so the user screen 
  doesnt freezes while the Op. is taking place

  implemneting useEffect hook so getMovies function is executed when App component firts loads
  */

	const [movies, setMovies] = useState([]);

    // Handles GET request
	const getMovies = async () => {
		try
		{
			const response = await api.get("/api/movies");
			//console.log(response.data);
			setMovies(response.data);
		} 
		catch (err) 
		{
			console.log(err);
		}
	};


	useEffect(() => {
		getMovies();
	}, [])

	return (
		<div className="App">
			
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route path="/" element={<Home movies = {movies}/>}> </Route>
				</Route>
			</Routes>
		</div>

	);
}

export default App;
