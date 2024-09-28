import PropTyes from 'prop-types'

const Question = ({ question, onAnswerSelect, selectedAnswer }) => {
  const labels = ["A", "B", "C", "D"];

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-4">{question.questionText}</h2>
      <ul className="space-y-2">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onAnswerSelect(option)}
              className={`w-full px-4 py-2 text-left border rounded hover:bg-blue-100 ${
                selectedAnswer === option ? "bg-blue-200" : ""
              }`}
            >
              <span className="font-bold">{labels[index]}. </span>
              <span>{option}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
Question.propTypes = {
    question: PropTyes.node,
    onAnswerSelect: PropTyes.node,
    selectedAnswer: PropTyes.node,
}

export default Question
