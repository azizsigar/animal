import { useGame } from '../context/GameContext';
function Game() {
    const { getCurrentStep, nextStep } = useGame();
  const { text, options } = getCurrentStep();

    return (
          <div>
            <h1>Find your way</h1>
            <p>{text}</p>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => nextStep(option.nextId)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
         
  )
}

export default Game