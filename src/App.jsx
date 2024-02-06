import Player from "./Components/Player/Player"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id='players'>
          <Player name={'player 1'} symbol={'X'}/>
          <Player name={'player 2'} symbol={'O'}/>
        </ol>
        Game Board
      </div>
    </main>
  )
}

export default App
