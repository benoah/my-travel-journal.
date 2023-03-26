import React, { useState } from "react";
import "./App.css";
// import Header from "./Header";
// import Meme from "./Meme";
import boxes from "./boxes.js";
import Box from "./Box.js";
import Joke from "./Joke";
import jokesData from "./jokesData"
export default function App() {


    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })

  return (
    <div>
  
  {jokeElements}

    </div>
  );
}
