import PropTypes from 'prop-types'
import { useState } from 'react';
import Question from './Question'

const questions = [
  {
    questionText: "What is the capital of Nigeria?",
    options: ["Accra", "Abuja", "Nairobi", "Gaborone"],
    correctAnswer: "Abuja",
  },
  {
    questionText: "Who was the first civilian President of Nigeria?",
    options: [
      "Bola Ahmed Tinubu",
      "Olusegun Obasanjo",
      "Nnamdi Azikiwe",
      "Ibrahim Badamosi Babangida",
    ],
    correctAnswer: "Nnamdi Azikiwe",
  },
  {
    questionText:
      "Which State in Nigeria is known as Food Basket of the Nation?",
    options: ["Kano", "Lagos", "Kogi", "Benue"],
    correctAnswer: "Benue",
  },
  {
    questionText: "In what year did the civil war start?",
    options: ["6 July, 1966", "6 July, 1967", "6 July, 1968", "6 July, 1969"],
    correctAnswer: "6 July, 1967",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswerSelect = (answer) => {
    const isCorrect = questions[currentQuestionIndex].correctAnswer === answer;

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    } else if (
      selectedAnswers[currentQuestionIndex] ===
      questions[currentQuestionIndex].correctAnswer
    ) {
      setScore((prevScore) => prevScore - 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const totalQuestions = questions.length;

  return (
    <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
      {isQuizComplete ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg">
            You scored <span className="font-semibold">{score}</span> out of{" "}
            <span className="font-semibold">{totalQuestions}</span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={goToNextQuestion}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
Quiz.propTypes = {
    onComplete: PropTypes.node,
}

export default Quiz
