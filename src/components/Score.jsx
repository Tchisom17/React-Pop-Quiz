import PropTypes from 'prop-types';

const Score = ({ score }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg">
        Your final score is: <span className="font-bold">{score}</span>
      </p>
    </div>
  );
}
Score.propTypes = {
    score: PropTypes.node,
}

export default Score
