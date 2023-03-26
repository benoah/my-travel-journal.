import React from "react"
import memesData from "./memesData.js"
import { useState } from "react";

export default function Meme() {
    /**

     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
    //  const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")




    const [ meme, setMeme] = useState({
        topText:"", 
        bottomText:"", 
        randomImage:"http://i.imgflip.com/1bij.jpg"
        
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
   //  console.log(allMemeImages.data.memes);


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNr = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNr].url
       //  console.log(url);
       setMeme((prevMeme)=>{
        return{
            ...prevMeme,
            randomImage:url
        }
       })
        
    }
 
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}