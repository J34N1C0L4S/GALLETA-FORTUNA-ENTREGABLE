import { useState } from 'react'
import './App.css'
import quotes from "./Data/phrases.json"
import photos from "./Data/photos.json"
import getRandomNumber from './utils/getNumber'
import CardPhrase from './components/CardPhrase'
import BtnPhrase from './components/BtnPhrase'

function App() {

  const indexRandom = getRandomNumber(quotes.length)

  const [phraseSelected, setphraseSelected] = useState(quotes[indexRandom]) 
  const [bgSelected, setBgSelected] = useState(photos[getRandomNumber(photos.length)]) 

  const objStyle = {
    backgroundImage: `url(fondo${bgSelected}.png)`
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-cover bg-center' style={objStyle}>
      <h1 className='absolute top-20 text-2xl uppercase font-bold'>Galleta de la fortuna</h1>
      <article className='max-w-md p-6 bg-[#c0e4dbaa] rounded-xl shadow-2xl'>
        <CardPhrase 
         phraseSelected={phraseSelected}
        />
        <BtnPhrase 
         setphraseSelected={setphraseSelected}
         setBgSelected={setBgSelected}
       />
      </article>      
    </div>
  )
}

export default App