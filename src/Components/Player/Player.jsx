import { useState } from "react"


const Player = ({name, symbol}) => {

    const [isEditing, setIsEditing] = useState(false)


    const handleEditClick = () => {
        setIsEditing(prevValue=> !prevValue)
    }

  return (
        <li>
            <span className="player">
            {
                !isEditing ?
                <span className='player-name'>{name}</span>
                :
                <input type="text" />

            }
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
          </li>
  )
}

export default Player