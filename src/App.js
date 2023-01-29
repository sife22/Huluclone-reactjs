import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { useState } from "react";
import requests from "./api";

function App() {
  const [selectedOption, setSelectedOption] = useState(
    requests.fetchActionMovies
  );
  const [movieName, setMovieName] = useState("");
  return (
    <div className="app">
      <Navbar
        setSelectedOption={setSelectedOption}
        setMovieName={setMovieName}
        movieName={movieName}
      />
      <Home selectedOption={selectedOption} />
    </div>
  );
}

export default App;
