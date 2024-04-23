import getRandomNumber from "../utils/getNumber"
import quotes from "../Data/phrases.json"
import photos from "../Data/photos.json"

const BtnPhrase = ({ setphraseSelected, setBgSelected }) => {

    const ChangePhrase = () => {
        const indexRandom = getRandomNumber(quotes.length)
        const phaseRandom = quotes[indexRandom]
        setphraseSelected(quotes[indexRandom])
        setBgSelected(photos[getRandomNumber(photos.length)])
    }

    return (
    <button className="ml-auto block cursor-pointer bg-teal-900 py-2 px-4 text-white rounded-md text-sm hover:brightness-200" onClick={ChangePhrase}>Leer otra</button>
  )
}

export default BtnPhrase
