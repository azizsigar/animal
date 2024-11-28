import  { createContext, useState, useContext } from 'react';
import gameData from '../data/gameData.json';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [steps, setSteps] = useState(gameData);

  const nextStep = (nextId) => {
    setCurrentStep(nextId);
  };

  const getCurrentStep = () => {
    return steps.find((step) => step.id === currentStep);
  };

  return (
    <GameContext.Provider value={{ getCurrentStep, nextStep }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
