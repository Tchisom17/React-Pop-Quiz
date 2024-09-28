import { useState } from 'react';
import Score from './components/Score';
import Quiz from './components/Quiz';

const App = () => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setShowScore(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {showScore ? (
        <Score score={score} />
      ) : (
        <Quiz onComplete={handleQuizCompletion} />
      )}
    </div>
  );
}

export default App
