import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
      <div>
        {/* You prefer <strong>{props.quizResult}</strong>! */}
        <strong>You are in Risk</strong>
      </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;