import { useState } from "react"


const Player = ({initialName, symbol}) => {

    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)


    const handleEditClick = () => {
        setIsEditing(prevValue=> !prevValue)
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    }

  return (
        <li>
            <span className="player">
            {
                !isEditing ?
                <span className='player-name'>{playerName}</span>
                :
                <input type="text" required value={playerName} onChange={handleChange}/>

            }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'save' : 'Edit'}</button>
          </li>
  )
}

export default Player