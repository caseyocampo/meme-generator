import React from "react"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/gk5el.jpg",
  })

  // eslint-disable-next-line
  const [allMemes, setAllMemes] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value,
      }
    })
  }

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url,
    }))
  }

  return (
    <div className="container">
      <div className="form-inputs">
        {/* Input 1 */}
        <div className="input-container">
          <label htmlFor="first-input" aria-label="First Input" className="visually-hidden">
            First Input
          </label>

          {/* prettier-ignore */}
          <input 
            type="text"  
            id="first-input" 
            className="input" 
            placeholder="Top Text" 
            name="topText" 
            value={meme.topText}
            onChange={handleChange} 
          />
        </div>

        {/* Input 2 */}
        <div className="input-container">
          <label htmlFor="second-input" aria-label="Second Input" className="visually-hidden">
            Second Input
          </label>
          {/* prettier-ignore */}
          <input 
            type="text" 
            id="second-input" 
            className="input" 
            placeholder="Bottom Text" 
            name="bottomText" 
            value={meme.bottomText}
            onChange={handleChange} />
        </div>
      </div>

      <button className="form-button font-bold" onClick={getMemeImage}>
        Get a new meme image 🖼
      </button>

      <section className="meme">
        <img src={meme.randomImage} alt="Meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </section>
    </div>
  )
}
